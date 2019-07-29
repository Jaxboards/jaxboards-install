/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { shoutsInstance, shoutsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<shoutsInstance, shoutsAttribute> => {
  return (sequelize.define(
    "shouts",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      shout: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      }
    },
    {
      tableName: "shouts"
    }
  ) as unknown) as Model<shoutsInstance, shoutsAttribute>;
};
