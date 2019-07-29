/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
import { membersInstance, membersAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
): Model<membersInstance, membersAttribute> => {
  return (sequelize.define(
    "members",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      pass: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      sig: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      posts: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      group_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true,
        references: {
          model: "member_groups",
          key: "id"
        }
      },
      avatar: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      usertitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      join_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      last_visit: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_skype: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_yim: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_msn: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_gtalk: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_aim: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      website: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: "0000-00-00"
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      display_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      full_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_steam: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      location: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: ""
      },
      gender: {
        type: DataTypes.ENUM("", "male", "female", "other"),
        allowNull: false
      },
      friends: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      enemies: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "''"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      sound_shout: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      sound_im: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      sound_pm: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      sound_postinmytopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      sound_postinsubscribedtopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      notify_pm: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      notify_postinmytopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      notify_postinsubscribedtopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      ucpnotepad: {
        type: DataTypes.STRING(2000),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      skin_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_twitter: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      email_settings: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      nowordfilter: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      ip: {
        type: "VARBINARY(16)",
        allowNull: false,
        defaultValue: ""
      },
      mod: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      wysiwyg: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      }
    },
    {
      tableName: "members"
    }
  ) as unknown) as Model<membersInstance, membersAttribute>;
};
