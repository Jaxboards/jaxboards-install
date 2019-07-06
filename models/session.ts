/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sessionInstance, sessionAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sessionInstance, sessionAttribute>('session', {
    id: {
      type: DataTypes.STRING(191),
      allowNull: false,
      primaryKey: true
    },
    uid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      references: {
        model: 'members',
        key: 'id'
      }
    },
    ip: {
      type: "VARBINARY(16)",
      allowNull: false,
      defaultValue: ''
    },
    vars: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_action: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    runonce: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    users_online_cache: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    is_bot: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    buddy_list_cache: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    location_verbose: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    useragent: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '\'\''
    },
    forumsread: {
      type: "BLOB",
      allowNull: false,
      defaultValue: '\'\''
    },
    topicsread: {
      type: "BLOB",
      allowNull: false,
      defaultValue: '\'\''
    },
    read_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    hide: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'session'
  });
};
