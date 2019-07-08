import yargs from "yargs";
import process from "process";
import inquirer from "inquirer";
import { Answers, Option, config, options } from "./options";

const main = async (): Promise<void> => {
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

  const input: { [key: string]: unknown } = optionsGenerator.argv;
  // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
  const inputs: Answers = {} as Answers;
  Object.keys(input).forEach((item): void => {
    if (
      typeof input[item] === "string" ||
      typeof input[item] === "number" ||
      typeof input[item] === "boolean"
    ) {
      // @ts-ignore: 2322
      inputs[item] = input[item];
    }
  });

  if (!inputs.configOnly) {
    // Database install not ready yet!
    process.stderr.write(`Database install not implemented.\n`);
  }

  // Interactive prompt for information we haven't gathered
  const questionsToAsk: object[] = [];

  options.forEach((option: Option): void => {
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
