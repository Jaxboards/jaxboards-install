import yargs from "yargs";
import process from "process";
import inquirer, { InputQuestion, NumberQuestion } from "inquirer";

/**
 * Config interface
 *
 * What the end result config should look like type-wise
 */
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

/**
 * Answers interface
 *
 * The results of the inquirer answers
 */
interface Answers {
  boardname?: string;
  domain?: string;
  mail_from?: string;
  sql_host?: string;
  sql_port?: number;
  sql_db?: string;
  sql_username?: string;
  sql_password?: string;
  sql_driver?: string;
  installed?: boolean;
  service?: boolean;
  prefix?: string;
  sql_prefix?: string;
}

const main = async (): Promise<void> => {
  // This is where the command line arguments are set
  const options = yargs
    .scriptName("jaxboards-install")
    .usage("$0 [args]")
    .command("$0", "Install JaxBoards databae and print configuration.")
    .option("configOnly", {
      description:
        "Only generate config- do not connect to or install the database",
      type: "boolean",
      default: true // will change when database install is implemented
    })
    .option("boardname", {
      description: "The board name",
      default: false
    })
    .option("domain", {
      description: "The domain the board will run on",
      default: false
    })
    .option("mail_from", {
      description: "The address email will be sent from",
      default: false
    })
    .option("sql_host", {
      description: "The database host the board will be installed to",
      default: false
    })
    .option("sql_port", {
      description: "The database host port the board will be installed to",
      default: false,
      type: "number"
    })
    .option("sql_db", {
      description: "The database the board will be installed to",
      default: false
    })
    .option("sql_username", {
      description: "The database username",
      default: false
    })
    .option("sql_password", {
      description: "The database password",
      default: false
    })
    .option("sql_prefix", {
      description:
        "The database table prefix, for installing multiple instances of the board to the same database",
      default: false
    })
    .options("config", {
      description: "Provide a path to an existing configuration file."
    }).argv;

  if (!options.configOnly) {
    // Database install not ready yet!
    process.stderr.write(`Database install not implemented.\n`);
  }

  // Set the configuration
  const config: Config = {
    boardname: "Jaxboards",
    domain: "example.com",
    // eslint-disable-next-line @typescript-eslint/camelcase
    mail_from: "Example <example@example.com>",
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_host: "localhost",
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_port: 3306,
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_db: "jaxboards",
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_username: "jaxboards",
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_password: "jaxboards",
    // eslint-disable-next-line @typescript-eslint/camelcase
    sql_prefix: "",
    installed: true,
    service: false,
    prefix: ""
  };

  // Interactive prompt for information we haven't gathered
  const questionsToAsk: (InputQuestion<string> | NumberQuestion<number>)[] = [];

  if (!options.boardname) {
    questionsToAsk.push({
      type: "input",
      name: "boardname",
      message: "What will this board's name be?",
      default: config.boardname
    });
  }

  if (questionsToAsk.length > 0) {
    const answers: Answers = await inquirer.prompt(questionsToAsk);

    if (undefined !== answers.boardname && answers.boardname) {
      config.boardname = answers.boardname;
    }
  }

  // Print the configuration
  process.stdout.write(`${JSON.stringify(config, null, 2)}\n`);
};
main();
