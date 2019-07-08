/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { textrulesInstance, textrulesAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<textrulesInstance, textrulesAttribute>(
    "textrules",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: DataTypes.ENUM("bbcode", "emote", "badword"),
        allowNull: false
      },
      needle: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      replacement: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      enabled: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "textrules"
    }
  );
};
