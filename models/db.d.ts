// tslint:disable
import * as Sequelize from "sequelize";

// table: banlist
export interface banlistAttribute {
  ip: any;
}
export interface banlistInstance
  extends Sequelize.Instance<banlistAttribute>,
    banlistAttribute {}
export interface banlistModel
  extends Sequelize.Model<banlistInstance, banlistAttribute> {}

// table: directory
export interface directoryAttribute {
  id: number;
  registrar_email: string;
  registrar_ip: any;
  date: Date;
  boardname: string;
  referral: string;
}
export interface directoryInstance
  extends Sequelize.Instance<directoryAttribute>,
    directoryAttribute {}
export interface directoryModel
  extends Sequelize.Model<directoryInstance, directoryAttribute> {}

// table: activity
export interface activityAttribute {
  id: number;
  type: any;
  arg1: string;
  uid: number;
  date: Date;
  affected_uid?: number;
  tid?: number;
  pid?: number;
  arg2: string;
}
export interface activityInstance
  extends Sequelize.Instance<activityAttribute>,
    activityAttribute {}
export interface activityModel
  extends Sequelize.Model<
    activityInstance,
    activityAttribute
  > {}

// table: files
export interface filesAttribute {
  id: number;
  name: string;
  hash: string;
  uid?: number;
  size: number;
  downloads: number;
  ip: any;
}
export interface filesInstance
  extends Sequelize.Instance<filesAttribute>,
    filesAttribute {}
export interface filesModel
  extends Sequelize.Model<filesInstance, filesAttribute> {}

// table: forums
export interface forumsAttribute {
  id: number;
  cat_id?: number;
  title: string;
  subtitle: string;
  lp_uid?: number;
  lp_date: Date;
  lp_tid?: number;
  lp_topic: string;
  path: string;
  show_sub: number;
  redirect: string;
  topics: number;
  posts: number;
  order: number;
  perms: any;
  orderby: number;
  nocount: number;
  redirects: number;
  trashcan: number;
  mods: string;
  show_ledby: number;
}
export interface forumsInstance
  extends Sequelize.Instance<forumsAttribute>,
    forumsAttribute {}
export interface forumsModel
  extends Sequelize.Model<
    forumsInstance,
    forumsAttribute
  > {}

// table: categories
export interface categoriesAttribute {
  id: number;
  title: string;
  order: number;
}
export interface categoriesInstance
  extends Sequelize.Instance<categoriesAttribute>,
    categoriesAttribute {}
export interface categoriesModel
  extends Sequelize.Model<
    categoriesInstance,
    categoriesAttribute
  > {}

// table: chatrooms
export interface chatroomsAttribute {
  id: string;
  userdata: string;
}
export interface chatroomsInstance
  extends Sequelize.Instance<chatroomsAttribute>,
    chatroomsAttribute {}
export interface chatroomsModel
  extends Sequelize.Model<
    chatroomsInstance,
    chatroomsAttribute
  > {}

// table: member_groups
export interface member_groupsAttribute {
  id: number;
  title: string;
  can_post: number;
  can_edit_posts: number;
  can_post_topics: number;
  can_edit_topics: number;
  can_add_comments: number;
  can_delete_comments: number;
  can_view_board: number;
  can_view_offline_board: number;
  flood_control: number;
  can_override_locked_topics: number;
  icon: string;
  can_shout: number;
  can_moderate: number;
  can_delete_shouts: number;
  can_delete_own_shouts: number;
  can_karma: number;
  can_im: number;
  can_pm: number;
  can_lock_own_topics: number;
  can_delete_own_topics: number;
  can_use_sigs: number;
  can_attach: number;
  can_delete_own_posts: number;
  can_poll: number;
  can_access_acp: number;
  can_view_shoutbox: number;
  can_view_stats: number;
  legend: number;
  can_view_fullprofile: number;
}
export interface member_groupsInstance
  extends Sequelize.Instance<member_groupsAttribute>,
    member_groupsAttribute {}
export interface member_groupsModel
  extends Sequelize.Model<
    member_groupsInstance,
    member_groupsAttribute
  > {}

// table: messages
export interface messagesAttribute {
  id: number;
  to?: number;
  from?: number;
  title: string;
  message: string;
  read: number;
  date: Date;
  del_recipient: number;
  del_sender: number;
  flag: number;
}
export interface messagesInstance
  extends Sequelize.Instance<messagesAttribute>,
    messagesAttribute {}
export interface messagesModel
  extends Sequelize.Model<
    messagesInstance,
    messagesAttribute
  > {}

// table: logs
export interface logsAttribute {
  id: number;
  code: number;
  ip: any;
  uid?: number;
  time: number;
  action: number;
  data: string;
}
export interface logsInstance
  extends Sequelize.Instance<logsAttribute>,
    logsAttribute {}
export interface logsModel
  extends Sequelize.Model<logsInstance, logsAttribute> {}

// table: posts
export interface postsAttribute {
  id: number;
  auth_id?: number;
  post: string;
  date: Date;
  showsig: number;
  showemotes: number;
  tid: number;
  newtopic: number;
  ip: any;
  edit_date: Date;
  editby?: number;
  rating: string;
}
export interface postsInstance
  extends Sequelize.Instance<postsAttribute>,
    postsAttribute {}
export interface postsModel
  extends Sequelize.Model<postsInstance, postsAttribute> {}

// table: members
export interface membersAttribute {
  id: number;
  name: string;
  pass: string;
  email: string;
  sig: string;
  posts: number;
  group_id?: number;
  avatar: string;
  usertitle: string;
  join_date: Date;
  last_visit: Date;
  contact_skype: string;
  contact_yim: string;
  contact_msn: string;
  contact_gtalk: string;
  contact_aim: string;
  website: string;
  birthdate: Date;
  about: string;
  display_name: string;
  full_name: string;
  contact_steam: string;
  location: string;
  gender: any;
  friends: string;
  enemies: string;
  sound_shout: number;
  sound_im: number;
  sound_pm: number;
  sound_postinmytopic: number;
  sound_postinsubscribedtopic: number;
  notify_pm: number;
  notify_postinmytopic: number;
  notify_postinsubscribedtopic: number;
  ucpnotepad: string;
  skin_id?: number;
  contact_twitter: string;
  email_settings: number;
  nowordfilter: number;
  ip: any;
  mod: number;
  wysiwyg: number;
}
export interface membersInstance
  extends Sequelize.Instance<membersAttribute>,
    membersAttribute {}
export interface membersModel
  extends Sequelize.Model<
    membersInstance,
    membersAttribute
  > {}

// table: pages
export interface pagesAttribute {
  act: string;
  page: string;
}
export interface pagesInstance
  extends Sequelize.Instance<pagesAttribute>,
    pagesAttribute {}
export interface pagesModel
  extends Sequelize.Model<pagesInstance, pagesAttribute> {}

// table: reports
export interface reportsAttribute {
  id: number;
  reporter?: number;
  status: number;
  reason: string;
  date: Date;
}
export interface reportsInstance
  extends Sequelize.Instance<reportsAttribute>,
    reportsAttribute {}
export interface reportsModel
  extends Sequelize.Model<
    reportsInstance,
    reportsAttribute
  > {}

// table: shouts
export interface shoutsAttribute {
  id: number;
  uid?: number;
  shout: string;
  date: Date;
  ip: any;
}
export interface shoutsInstance
  extends Sequelize.Instance<shoutsAttribute>,
    shoutsAttribute {}
export interface shoutsModel
  extends Sequelize.Model<
    shoutsInstance,
    shoutsAttribute
  > {}

// table: ratingniblets
export interface ratingnibletsAttribute {
  id: number;
  img: string;
  title: string;
}
export interface ratingnibletsInstance
  extends Sequelize.Instance<ratingnibletsAttribute>,
    ratingnibletsAttribute {}
export interface ratingnibletsModel
  extends Sequelize.Model<
    ratingnibletsInstance,
    ratingnibletsAttribute
  > {}

// table: profile_comments
export interface profile_commentsAttribute {
  id: number;
  to: number;
  from: number;
  comment: string;
  date: Date;
}
export interface profile_commentsInstance
  extends Sequelize.Instance<profile_commentsAttribute>,
    profile_commentsAttribute {}
export interface profile_commentsModel
  extends Sequelize.Model<
    profile_commentsInstance,
    profile_commentsAttribute
  > {}

// table: skins
export interface skinsAttribute {
  id: number;
  using: number;
  title: string;
  custom: number;
  wrapper: string;
  default: number;
  hidden: number;
}
export interface skinsInstance
  extends Sequelize.Instance<skinsAttribute>,
    skinsAttribute {}
export interface skinsModel
  extends Sequelize.Model<skinsInstance, skinsAttribute> {}

// table: stats
export interface statsAttribute {
  posts: number;
  topics: number;
  members: number;
  most_members: number;
  most_members_day: number;
  last_register?: number;
}
export interface statsInstance
  extends Sequelize.Instance<statsAttribute>,
    statsAttribute {}
export interface statsModel
  extends Sequelize.Model<statsInstance, statsAttribute> {}

// table: textrules
export interface textrulesAttribute {
  id: number;
  type: any;
  needle: string;
  replacement: string;
  enabled: number;
}
export interface textrulesInstance
  extends Sequelize.Instance<textrulesAttribute>,
    textrulesAttribute {}
export interface textrulesModel
  extends Sequelize.Model<
    textrulesInstance,
    textrulesAttribute
  > {}

// table: session
export interface sessionAttribute {
  id: string;
  uid?: number;
  ip: any;
  vars: string;
  last_update: Date;
  last_action: Date;
  runonce: string;
  location: string;
  users_online_cache: string;
  is_bot: number;
  buddy_list_cache: string;
  location_verbose: string;
  useragent: string;
  forumsread: any;
  topicsread: any;
  read_date: Date;
  hide: number;
}
export interface sessionInstance
  extends Sequelize.Instance<sessionAttribute>,
    sessionAttribute {}
export interface sessionModel
  extends Sequelize.Model<
    sessionInstance,
    sessionAttribute
  > {}

// table: topics
export interface topicsAttribute {
  id: number;
  title: string;
  subtitle: string;
  lp_uid?: number;
  lp_date: Date;
  fid?: number;
  auth_id?: number;
  replies: number;
  views: number;
  pinned: number;
  poll_choices: string;
  poll_results: string;
  poll_q: string;
  poll_type: any;
  summary: string;
  locked: number;
  date: Date;
  op?: number;
  cal_event: number;
}
export interface topicsInstance
  extends Sequelize.Instance<topicsAttribute>,
    topicsAttribute {}
export interface topicsModel
  extends Sequelize.Model<
    topicsInstance,
    topicsAttribute
  > {}
