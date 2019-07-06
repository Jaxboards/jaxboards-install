import yargs from "yargs";
import process from "process";

interface Config {
  boardname: string;
  domain: string;
  mail_from: string;
  sql_host: string;
  sql_port: number;
  sql_db: string;
  sql_username: string;
  sql_password: string;
  sql_driver?: string;
  installed: boolean;
  service: boolean;
  prefix: string;
  sql_prefix: string;
}

const options = yargs
  .scriptName("jaxboards-install")
  .usage("$0 [args]")
  .command("$0", "Install JaxBoards databae and print configuration.")
  .option("boardname", {
    description: "The board name",
    default: "Jaxboards"
  })
  .option("domain", {
    description: "The domain the board will run on",
    default: "example.com"
  })
  .option("mail_from", {
    description: "The address email will be sent from",
    default: "Example <example@example.com>"
  })
  .option("sql_db", {
    description: "The database the board will be installed to",
    default: "jaxboards"
  })
  .option("sql_host", {
    description: "The database host the board will be installed to",
    default: "localhost"
  })
  .option("sql_port", {
    description: "The database host port the board will be installed to",
    default: 3306,
    type: "number"
  })
  .option("sql_username", {
    description: "The database username",
    default: "jaxboards"
  })
  .option("sql_password", {
    description: "The database password",
    default: "jaxboards"
  })
  .option("sql_prefix", {
    description:
      "The database table prefix, for installing multiple instances of the board to the same database",
    default: ""
  })
  .options("config", {
    description: "Provide a path to an existing configuration file."
  }).argv;

const config: Config = {
  boardname: options.boardname,
  domain: options.domain,
  // eslint-disable-next-line @typescript-eslint/camelcase
  mail_from: options.mail_from,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_host: options.sql_host,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_port: options.sql_port || 3306,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_db: options.sql_db,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_username: options.sql_username,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_password: options.sql_password,
  // eslint-disable-next-line @typescript-eslint/camelcase
  sql_prefix: options.sql_prefix,
  installed: true,
  service: false,
  prefix: ""
};

process.stdout.write(`${JSON.stringify(config, null, 2)}\n`);
