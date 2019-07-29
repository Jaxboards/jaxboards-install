/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { topicsInstance, topicsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<topicsInstance, topicsAttribute> => {
  return (sequelize.define(
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
      fid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "forums",
          key: "id"
        }
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
      // eslint-disable-next-line @typescript-eslint/camelcase
      poll_choices: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      poll_results: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      poll_q: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
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
      // eslint-disable-next-line @typescript-eslint/camelcase
      cal_event: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "topics"
    }
  ) as unknown) as Model<topicsInstance, topicsAttribute>;
};
