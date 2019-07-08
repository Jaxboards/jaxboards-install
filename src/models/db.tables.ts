// tslint:disable
import * as path from "path";
import * as sequelize from "sequelize";
import * as def from "./db";

export interface ITables {
  banlist: def.banlistModel;
  directory: def.directoryModel;
  activity: def.activityModel;
  files: def.filesModel;
  forums: def.forumsModel;
  categories: def.categoriesModel;
  chatrooms: def.chatroomsModel;
  member_groups: def.member_groupsModel;
  messages: def.messagesModel;
  logs: def.logsModel;
  posts: def.postsModel;
  members: def.membersModel;
  pages: def.pagesModel;
  reports: def.reportsModel;
  shouts: def.shoutsModel;
  ratingniblets: def.ratingnibletsModel;
  profile_comments: def.profile_commentsModel;
  skins: def.skinsModel;
  stats: def.statsModel;
  textrules: def.textrulesModel;
  session: def.sessionModel;
  topics: def.topicsModel;
  tokens: def.tokensModel;
}

export const getModels = function(seq: sequelize.Sequelize): ITables {
  const tables: ITables = {
    banlist: seq.import(path.join(__dirname, "./banlist")),
    directory: seq.import(path.join(__dirname, "./directory")),
    activity: seq.import(path.join(__dirname, "./activity")),
    files: seq.import(path.join(__dirname, "./files")),
    forums: seq.import(path.join(__dirname, "./forums")),
    categories: seq.import(path.join(__dirname, "./categories")),
    chatrooms: seq.import(path.join(__dirname, "./chatrooms")),
    member_groups: seq.import(path.join(__dirname, "./member_groups")),
    messages: seq.import(path.join(__dirname, "./messages")),
    logs: seq.import(path.join(__dirname, "./logs")),
    posts: seq.import(path.join(__dirname, "./posts")),
    members: seq.import(path.join(__dirname, "./members")),
    pages: seq.import(path.join(__dirname, "./pages")),
    reports: seq.import(path.join(__dirname, "./reports")),
    shouts: seq.import(path.join(__dirname, "./shouts")),
    ratingniblets: seq.import(path.join(__dirname, "./ratingniblets")),
    profile_comments: seq.import(path.join(__dirname, "./profile_comments")),
    skins: seq.import(path.join(__dirname, "./skins")),
    stats: seq.import(path.join(__dirname, "./stats")),
    textrules: seq.import(path.join(__dirname, "./textrules")),
    session: seq.import(path.join(__dirname, "./session")),
    topics: seq.import(path.join(__dirname, "./topics")),
    tokens: seq.import(path.join(__dirname, "./tokens"))
  };
  return tables;
};
