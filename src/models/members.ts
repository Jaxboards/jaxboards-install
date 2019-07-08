/* jshint indent: 2 */
// tslint:disable
import * as sequelize from "sequelize";
import { DataTypes } from "sequelize";
import { membersInstance, membersAttribute } from "./db";

module.exports = function(
  sequelize: sequelize.Sequelize,
  DataTypes: DataTypes
) {
  return sequelize.define<membersInstance, membersAttribute>(
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
      join_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      last_visit: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: "0000-00-00 00:00:00"
      },
      contact_skype: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      contact_yim: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      contact_msn: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
      contact_gtalk: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
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
      display_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ""
      },
      full_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
      },
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
      sound_shout: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      sound_im: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      },
      sound_pm: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      sound_postinmytopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      sound_postinsubscribedtopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      notify_pm: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      notify_postinmytopic: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
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
      skin_id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: true
      },
      contact_twitter: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
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
  );
};
