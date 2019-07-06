/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { categoriesInstance, categoriesAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<categoriesInstance, categoriesAttribute>(
    "categories",
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
      order: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "categories"
    }
  );
};
