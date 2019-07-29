/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { logsInstance, logsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<logsInstance, logsAttribute> => {
  return (sequelize.define(
    "logs",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      code: {
        type: DataTypes.INTEGER(3).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      time: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      action: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      data: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      }
    },
    {
      tableName: "logs"
    }
  ) as unknown) as Model<logsInstance, logsAttribute>;
};
