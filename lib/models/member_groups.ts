/* jshint indent: 2 */
// tslint:disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Sequelize, Model, DataTypes } from "sequelize";
// eslint-disable-next-line @typescript-eslint/camelcase
import { member_groupsInstance, member_groupsAttribute } from "./db";

module.exports = (
  sequelize: Sequelize,
  // eslint-disable-next-line no-shadow
  DataTypes
  // eslint-disable-next-line @typescript-eslint/camelcase
): Model<member_groupsInstance, member_groupsAttribute> => {
  return (sequelize.define(
    "member_groups",
    {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_post: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_edit_posts: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_post_topics: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_edit_topics: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_add_comments: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_delete_comments: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_view_board: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_view_offline_board: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      flood_control: {
        type: DataTypes.INTEGER(11).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_override_locked_topics: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      icon: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ""
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_shout: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_moderate: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_delete_shouts: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_delete_own_shouts: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_karma: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_im: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_pm: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_lock_own_topics: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_delete_own_topics: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_use_sigs: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_attach: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_delete_own_posts: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_poll: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_access_acp: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_view_shoutbox: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_view_stats: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      legend: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "0"
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      can_view_fullprofile: {
        type: DataTypes.INTEGER(1).UNSIGNED,
        allowNull: false,
        defaultValue: "1"
      }
    },
    {
      tableName: "member_groups"
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
  ) as unknown) as Model<member_groupsInstance, member_groupsAttribute>;
};
