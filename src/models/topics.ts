/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { topicsInstance, topicsAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<topicsInstance, topicsAttribute>(
    "topics",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      subtitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      lp_uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      lp_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      fid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "forums",
          key: "id"
        }
      },
      auth_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      replies: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      views: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      pinned: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      poll_choices: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      poll_results: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      poll_q: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      poll_type: {
        type: DataTypes.ENUM("", "single", "multi"),
        allowNull: false,
        defaultValue: ""
      },
      summary: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      locked: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      op: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "posts",
          key: "id"
        }
      },
      cal_event: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "topics"
    }
  );
};
