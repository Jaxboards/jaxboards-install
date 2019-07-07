/**
 * Option interface
 * What attributes each option should have
 */
export interface Option {
  name: string;
  description: string;
  question: string;
  type?: "string" | "number" | "boolean" | "array" | "count";
  default: string | number | boolean;
}

/**
 * Config interface
 *
 * What the end result config should look like type-wise
 */
export interface Config {
  [key: string]: string | number | boolean | undefined;
  boardname: string;
  domain: string;
  mail_from: string;
  sql_host: string;
  sql_port?: number;
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
export interface Answers {
  [key: string]: string | number | undefined;
  boardname?: string;
  domain?: string;
  mail_from?: string;
  sql_host?: string;
  sql_port?: number;
  sql_db?: string;
  sql_username?: string;
  sql_password?: string;
  sql_driver?: string;
  sql_prefix?: string;
}

export const options: Option[] = [
  {
    name: "boardname",
    description: "The title for the installed board",
    question: "What will this board's name be?",
    type: "string",
    default: "Jaxboards"
  },
  {
    name: "domain",
    description: "The domain the board will run on",
    question: "What domain will this board be assigned to?",
    type: "string",
    default: "example.com"
  },
  {
    name: "mail_from",
    description: "The address email will be sent from",
    question: "What email address will emails sent from the board me from?",
    type: "string",
    default: "Example <example@example.com>"
  },
  {
    name: "sql_host",
    description: "The database host the board will be installed to",
    question: "What is the database host?",
    type: "string",
    default: "localhost"
  },
  {
    name: "sql_port",
    description: "The database port the board will be installed to",
    question: "What port is the database on?",
    type: "number",
    default: 3306
  },
  {
    name: "sql_db",
    description: "The database the board will be installed to",
    question: "What is the name of the database?",
    type: "string",
    default: "jaxboards"
  },
  {
    name: "sql_username",
    description: "The database username",
    question: "What is the username to authenticate to the database?",
    type: "string",
    default: "jaxboards"
  },
  {
    name: "sql_password",
    description: "The database password",
    question: "What is the password to authenticate to the database?",
    type: "string",
    default: "jaxboards"
  },
  {
    name: "sql_prefix",
    description:
      "The database table prefix, for installing multiple instances of the board to the same database",
    question:
      "Do you want to install multiple instances to the same database? If so enter a prefix for this install?" +
      " (otherwise leave empty)",
    type: "string",
    default: ""
  }
];
