/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { messagesInstance, messagesAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<messagesInstance, messagesAttribute> => {
  return (sequelize.define(
    "messages",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      to: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      from: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      read: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      del_recipient: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      del_sender: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      flag: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "messages"
    }
  ) as unknown) as Model<messagesInstance, messagesAttribute>;
};
