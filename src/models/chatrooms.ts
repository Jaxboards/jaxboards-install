/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { chatroomsInstance, chatroomsAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<chatroomsInstance, chatroomsAttribute>(
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
  );
};
