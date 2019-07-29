/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { statsInstance, statsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<statsInstance, statsAttribute> => {
  return (sequelize.define(
    "stats",
    {
      posts: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      topics: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      members: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      most_members: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      most_members_day: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      last_register: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      }
    },
    {
      tableName: "stats"
    }
  ) as unknown) as Model<statsInstance, statsAttribute>;
};
