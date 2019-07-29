/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { postsInstance, postsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<postsInstance, postsAttribute> => {
  return (sequelize.define(
    "posts",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      auth_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      post: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      showsig: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      showemotes: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      tid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: "topics",
          key: "id"
        }
      },
      newtopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      edit_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      editby: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
      rating: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      }
    },
    {
      tableName: "posts"
    }
  ) as unknown) as Model<postsInstance, postsAttribute>;
};
