/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { banlistInstance, banlistAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars
  DataTypes
): Model<banlistInstance, banlistAttribute> => {
  return (sequelize.define(
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
  ) as unknown) as Model<banlistInstance, banlistAttribute>;
};
