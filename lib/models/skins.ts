/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { skinsInstance, skinsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<skinsInstance, skinsAttribute> => {
  return (sequelize.define(
    "skins",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      using: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      title: {
        type: DataTypes.STRING(250),
        allowNull: false
      },
      custom: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      wrapper: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      default: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      hidden: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "skins"
    }
  ) as unknown) as Model<skinsInstance, skinsAttribute>;
};
