const yargs = require("yargs");
const process = require("process");
const inquirer = require("inquirer");
const { Sequelize } = require("sequelize");
const { config, options } = require("./options.js");

const main = async () => {
  // This is where the command line arguments are set
  const optionsGenerator = yargs
    .scriptName("jaxboards-install")
    .usage("$0 [args]")
    .command("$0", "Install JaxBoards databae and print configuration.")
    .option("configOnly", {
      description:
        "Only generate config- do not connect to or install the database",
      type: "boolean",
      default: false
    });

  options.forEach(option => {
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
  const inputs = {};
  Object.keys(input).forEach(item => {
    if (
      typeof input[item] === "string" ||
      typeof input[item] === "number" ||
      typeof input[item] === "boolean"
    ) {
      inputs[item] = input[item];
    }
  });

  // Interactive prompt for information we haven't gathered
  const questionsToAsk = [];

  options.forEach(option => {
    if (!inputs[option.name]) {
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
    } else if (
      typeof option.name === "string" ||
      typeof option.name === "number" ||
      typeof option.name === "boolean"
    ) {
      config[option.name] = inputs[option.name];
    }
  });

  if (questionsToAsk.length > 0) {
    const answers = await inquirer.prompt(questionsToAsk);

    options.forEach(option => {
      if (undefined !== answers[option.name] && answers[option.name]) {
        config[option.name] = answers[option.name];
      }
    });
  }

  if (!inputs.configOnly) {
    console.error("Database functions not implemented");
    if (false) {
      const sequelize = new Sequelize(
        config.sql_db,
        config.sql_username,
        config.sql_password,
        {
          host: config.sql_host,
          port: config.sql_port,
          dialect: config.sql_driver ? config.sql_driver : "mysql"
        }
      );
      // getModels(sequelize);
      sequelize.sync();
    }
  }

  // Print the configuration
  process.stdout.write(`${JSON.stringify(config, null, 2)}\n`);
};
main();
