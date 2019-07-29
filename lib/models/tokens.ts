/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { tokensInstance, tokensAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<tokensInstance, tokensAttribute> => {
  return (sequelize.define(
    "tokens",
    {
      token: {
        type: DataTypes.STRING(191),
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.ENUM("login", "forgotpassword"),
        allowNull: false,
        defaultValue: "login"
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: "members",
          key: "id"
        }
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "tokens"
    }
  ) as unknown) as Model<tokensInstance, tokensAttribute>;
};
