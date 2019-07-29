/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { ratingnibletsInstance, ratingnibletsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<ratingnibletsInstance, ratingnibletsAttribute> => {
  return (sequelize.define(
    "ratingniblets",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      img: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false
      }
    },
    {
      tableName: "ratingniblets"
    }
  ) as unknown) as Model<ratingnibletsInstance, ratingnibletsAttribute>;
};
