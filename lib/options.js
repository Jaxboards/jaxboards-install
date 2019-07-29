const options = [
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

// build default config
const config = {};
options.forEach(option => {
  config[option.name] = option.default;
});
config.installed = true;
config.service = false;
config.prefix = "";

module.exports = {
  options,
  config
};
