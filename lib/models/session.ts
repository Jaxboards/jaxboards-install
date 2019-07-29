/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { sessionInstance, sessionAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<sessionInstance, sessionAttribute> => {
  return (sequelize.define(
    "session",
    {
      id: {
        type: DataTypes.STRING(191),
        allowNull: false,
        primaryKey: true
      },
      uid: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "members",
          key: "id"
        }
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      },
      vars: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      last_update: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      last_action: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      runonce: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      users_online_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_bot: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      buddy_list_cache: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      location_verbose: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: ""
      },
      useragent: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      forumsread: {
        type: "BLOB",
        allowNull: false,
        defaultValue: "''"
      },
      topicsread: {
        type: "BLOB",
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      read_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      hide: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "session"
    }
  ) as unknown) as Model<sessionInstance, sessionAttribute>;
};
