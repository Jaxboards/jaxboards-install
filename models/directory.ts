/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {directoryInstance, directoryAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<directoryInstance, directoryAttribute>('directory', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    registrar_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    registrar_ip: {
      type: "VARBINARY(16)",
      allowNull: false,
      defaultValue: ''
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    boardname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    referral: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'directory'
  });
};
