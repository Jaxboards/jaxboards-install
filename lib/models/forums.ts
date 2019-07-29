/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { forumsInstance, forumsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<forumsInstance, forumsAttribute> => {
  return (sequelize.define(
    "forums",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      cat_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "categories",
          key: "id"
        }
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      subtitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      lp_uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      lp_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      lp_tid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "topics",
          key: "id"
        }
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      lp_topic: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      path: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      show_sub: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      redirect: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      topics: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      posts: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      order: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      perms: {
        type: "VARBINARY(48)",
        allowNull: false,
        defaultValue: ""
      },
      orderby: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      nocount: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      redirects: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      trashcan: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      mods: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      show_ledby: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "forums"
    }
  ) as unknown) as Model<forumsInstance, forumsAttribute>;
};
