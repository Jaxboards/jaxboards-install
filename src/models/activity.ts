/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { activityInstance, activityAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<activityInstance, activityAttribute>(
    "activity",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.ENUM(
          "new_post",
          "new_topic",
          "buddy_add",
          "buddy_block",
          "buddy_status",
          "profile_name_change",
          "profile_comment"
        ),
        allowNull: false
      },
      arg1: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: "members",
          key: "id"
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      affected_uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      tid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "topics",
          key: "id"
        }
      },
      pid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "posts",
          key: "id"
        }
      },
      arg2: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      }
    },
    {
      tableName: "activity"
    }
  );
};
