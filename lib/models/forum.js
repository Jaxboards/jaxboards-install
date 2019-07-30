const Sequelize = require("sequelize");

class ForumModel extends Sequelize.Model {}

module.exports = {
  init(sequelize) {
    ForumModel.init(
      {
        cat_id: Sequelize.INTEGER,
        title: Sequelize.STRING,
        subtitle: Sequelize.TEXT,
        lp_uid: Sequelize.INTEGER,
        lp_date: Sequelize.DATE,
        lp_tid: Sequelize.INTEGER,
        lp_topic: Sequelize.STRING,
        path: Sequelize.STRING,
        redirect: Sequelize.STRING,
        show_sub: Sequelize.INTEGER,
        topics: Sequelize.INTEGER,
        posts: Sequelize.INTEGER,
        order: Sequelize.INTEGER,
        perms: Sequelize.STRING.BINARY,
        orderby: Sequelize.INTEGER,
        nocount: Sequelize.BOOLEAN,
        redirects: Sequelize.INTEGER,
        trashcan: Sequelize.BOOLEAN,
        mods: Sequelize.STRING,
        show_ledby: Sequelize.BOOLEAN
      },
      {
        indexes: [
          {
            fields: ["cat_id"]
          },
          {
            fields: ["lp_uid"]
          },
          {
            fields: ["lp_tid"]
          }
        ],
        modelName: "forum",
        sequelize,
        timestamps: false
      }
    );
  },

  setAssociations({ Forum, Category, Member, Topic }) {
    Forum.belongsTo(Category, { foreignKey: "cat_id" });
    Forum.belongsTo(Topic, { foreignKey: "lp_tid", as: "last_topic" });
    Forum.belongsTo(Member, { foreignKey: "lp_uid", as: "last_poster" });
  },

  model: ForumModel
};
