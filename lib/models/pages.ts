/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { pagesInstance, pagesAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<pagesInstance, pagesAttribute> => {
  return (sequelize.define(
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
  ) as unknown) as Model<pagesInstance, pagesAttribute>;
};
