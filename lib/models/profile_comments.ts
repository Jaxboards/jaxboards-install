/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
// eslint-disable-next-line @typescript-eslint/camelcase
import { profile_commentsInstance, profile_commentsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
  // eslint-disable-next-line @typescript-eslint/camelcase
): Model<profile_commentsInstance, profile_commentsAttribute> => {
  return (sequelize.define(
    "profile_comments",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      to: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: "members",
          key: "id"
        }
      },
      from: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        references: {
          model: "members",
          key: "id"
        }
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      }
    },
    {
      tableName: "profile_comments"
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
  ) as unknown) as Model<profile_commentsInstance, profile_commentsAttribute>;
};
