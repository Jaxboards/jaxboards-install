/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { directoryInstance, directoryAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<directoryInstance, directoryAttribute> => {
  return (sequelize.define(
    "directory",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      registrar_email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      registrar_ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      boardname: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      referral: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    },
    {
      tableName: "directory"
    }
  ) as unknown) as Model<directoryInstance, directoryAttribute>;
};
