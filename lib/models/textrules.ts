/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { textrulesInstance, textrulesAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<textrulesInstance, textrulesAttribute> => {
  return (sequelize.define(
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
  ) as unknown) as Model<textrulesInstance, textrulesAttribute>;
};
