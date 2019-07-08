/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { pagesInstance, pagesAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<pagesInstance, pagesAttribute>(
    "pages",
    {
      act: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true
      },
      page: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      }
    },
    {
      tableName: "pages"
    }
  );
};
