import yargs from "yargs";
import process from "process";
import inquirer from "inquirer";
import { Config, Answers, Option, options } from "./options";

const main = async (): Promise<void> => {
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

  // This is where the command line arguments are set
  const optionsGenerator = yargs
    .scriptName("jaxboards-install")
    .usage("$0 [args]")
    .command("$0", "Install JaxBoards databae and print configuration.")
    .option("configOnly", {
      description:
        "Only generate config- do not connect to or install the database",
      type: "boolean",
      default: true // will change when database install is implemented
    });

  options.forEach((option: Option): void => {
    optionsGenerator.option(option.name, {
      description: option.description,
      default: false,
      type: option.type
    });
  });

  optionsGenerator.options("config", {
    description: "Provide a path to an existing configuration file."
  });

  const input = optionsGenerator.argv;

  if (!input.configOnly) {
    // Database install not ready yet!
    process.stderr.write(`Database install not implemented.\n`);
  }

  // Interactive prompt for information we haven't gathered
  const questionsToAsk: object[] = [];

  options.forEach((option: Option): void => {
    if (!input[option.name]) {
      const questionObject = {
        type: "input",
        name: option.name,
        message: option.question,
        default: option.default
      };
      if (option.type === "number") {
        questionObject.type = "number";
      }
      questionsToAsk.push(questionObject);
    } else {
      config[option.name] = input[option.name];
    }
  });

  if (questionsToAsk.length > 0) {
    const answers: Answers = await inquirer.prompt(questionsToAsk);

    options.forEach((option: Option): void => {
      if (undefined !== answers[option.name] && answers[option.name]) {
        config[option.name] = answers[option.name];
      }
    });
  }

  // Print the configuration
  process.stdout.write(`${JSON.stringify(config, null, 2)}\n`);
};
main();
