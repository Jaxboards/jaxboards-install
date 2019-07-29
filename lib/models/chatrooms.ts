/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { chatroomsInstance, chatroomsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<chatroomsInstance, chatroomsAttribute> => {
  return (sequelize.define(
    "chatrooms",
    {
      id: {
        type: DataTypes.STRING(32),
        allowNull: false,
        primaryKey: true
      },
      userdata: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "chatrooms"
    }
  ) as unknown) as Model<chatroomsInstance, chatroomsAttribute>;
};
