/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { tokensInstance, tokensAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<tokensInstance, tokensAttribute>(
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
  );
};
