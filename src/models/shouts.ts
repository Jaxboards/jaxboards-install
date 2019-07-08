/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { shoutsInstance, shoutsAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<shoutsInstance, shoutsAttribute>(
    "shouts",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      shout: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      }
    },
    {
      tableName: "shouts"
    }
  );
};
