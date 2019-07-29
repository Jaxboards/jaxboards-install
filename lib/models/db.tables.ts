// tslint:disable
import * as path from "path";
import * as sequelize from "sequelize";
import * as def from "./db";

export interface Tables {
  banlist: def.banlistModel;
  directory: def.directoryModel;
  activity: def.activityModel;
  files: def.filesModel;
  forums: def.forumsModel;
  categories: def.categoriesModel;
  chatrooms: def.chatroomsModel;
  // eslint-disable-next-line @typescript-eslint/camelcase
  member_groups: def.member_groupsModel;
  messages: def.messagesModel;
  logs: def.logsModel;
  posts: def.postsModel;
  members: def.membersModel;
  pages: def.pagesModel;
  reports: def.reportsModel;
  shouts: def.shoutsModel;
  ratingniblets: def.ratingnibletsModel;
  // eslint-disable-next-line @typescript-eslint/camelcase
  profile_comments: def.profile_commentsModel;
  skins: def.skinsModel;
  stats: def.statsModel;
  textrules: def.textrulesModel;
  session: def.sessionModel;
  topics: def.topicsModel;
  tokens: def.tokensModel;
}

export const getModels = (seq: sequelize.Sequelize): Tables => {
  const tables: Tables = {
    // @ts-ignore: 7009
    banlist: seq.import(path.join(__dirname, "./banlist")),
    // @ts-ignore: 7009
    directory: seq.import(path.join(__dirname, "./directory")),
    // @ts-ignore: 7009
    activity: seq.import(path.join(__dirname, "./activity")),
    // @ts-ignore: 7009
    files: seq.import(path.join(__dirname, "./files")),
    // @ts-ignore: 7009
    forums: seq.import(path.join(__dirname, "./forums")),
    // @ts-ignore: 7009
    categories: seq.import(path.join(__dirname, "./categories")),
    // @ts-ignore: 7009
    chatrooms: seq.import(path.join(__dirname, "./chatrooms")),
    // @ts-ignore: 7009
    // eslint-disable-next-line @typescript-eslint/camelcase
    member_groups: seq.import(path.join(__dirname, "./member_groups")),
    // @ts-ignore: 7009
    messages: seq.import(path.join(__dirname, "./messages")),
    // @ts-ignore: 7009
    logs: seq.import(path.join(__dirname, "./logs")),
    // @ts-ignore: 7009
    posts: seq.import(path.join(__dirname, "./posts")),
    // @ts-ignore: 7009
    members: seq.import(path.join(__dirname, "./members")),
    // @ts-ignore: 7009
    pages: seq.import(path.join(__dirname, "./pages")),
    // @ts-ignore: 7009
    reports: seq.import(path.join(__dirname, "./reports")),
    // @ts-ignore: 7009
    shouts: seq.import(path.join(__dirname, "./shouts")),
    // @ts-ignore: 7009
    ratingniblets: seq.import(path.join(__dirname, "./ratingniblets")),
    // @ts-ignore: 7009
    // eslint-disable-next-line @typescript-eslint/camelcase
    profile_comments: seq.import(path.join(__dirname, "./profile_comments")),
    // @ts-ignore: 7009
    skins: seq.import(path.join(__dirname, "./skins")),
    // @ts-ignore: 7009
    stats: seq.import(path.join(__dirname, "./stats")),
    // @ts-ignore: 7009
    textrules: seq.import(path.join(__dirname, "./textrules")),
    // @ts-ignore: 7009
    session: seq.import(path.join(__dirname, "./session")),
    // @ts-ignore: 7009
    topics: seq.import(path.join(__dirname, "./topics")),
    // @ts-ignore: 7009
    tokens: seq.import(path.join(__dirname, "./tokens"))
  };
  return tables;
};
