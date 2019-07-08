/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { banlistInstance, banlistAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<banlistInstance, banlistAttribute>(
    "banlist",
    {
      ip: {
        type: "VARBINARY(16)",
        allowNull: false
      }
    },
    {
      tableName: "banlist"
    }
  );
};
