const path = require("path");
const { exec } = require("child_process");

function runCommand(args, cwd) {
  return new Promise(resolve => {
    exec(
      `ts-node ${path.resolve("./src/install.ts")} ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        });
      }
    );
  });
}

test("Help prints and returns 0", async () => {
  const result = await runCommand(["--help"], ".");
  expect(result.code).toBe(0);
});

describe("testing json output with all commands entered", () => {
  let result;
  let config;

  beforeAll(async () => {
    // Set all test args here- missing args call inquirer and we don't want that
    result = await runCommand(
      [
        "--configOnly",
        "--boardname",
        "test",
        "--domain",
        "example.test",
        "--mail_from",
        '"Test <test@example.test>"',
        "--sql_host",
        "example.com",
        "--sql_port",
        "1",
        "--sql_db",
        "example",
        "--sql_username",
        "example",
        "--sql_password",
        "example",
        "--sql_prefix",
        "example"
      ],
      "."
    );
    config = JSON.parse(result.stdout);
  });

  test("result code is 0 when setting all arguments", async () => {
    expect(result.code).toBe(0);
  });

  test("--boardname set the boardname", async () => {
    expect(config.boardname).toBe("test");
  });

  test("--domain set the domain", async () => {
    expect(config.domain).toBe("example.test");
  });

  test("--mail_from set the mail_from", async () => {
    expect(config.mail_from).toBe("Test <test@example.test>");
  });

  test("--sql_host set the sql_host", async () => {
    expect(config.sql_host).toBe("example.com");
  });

  test("--sql_port set the sql_port", async () => {
    expect(config.sql_port).toBe(1);
  });

  test("--sql_db set the sql_db", async () => {
    expect(config.sql_db).toBe("example");
  });

  test("--sql_username set the sql_username", async () => {
    expect(config.sql_username).toBe("example");
  });

  test("--sql_password set the sql_password", async () => {
    expect(config.sql_password).toBe("example");
  });

  test("--sql_prefix set the sql_prefix", async () => {
    expect(config.sql_prefix).toBe("example");
  });

  test("installed is true", async () => {
    expect(config.installed).toBe(true);
  });

  test("service is false", async () => {
    expect(config.service).toBe(false);
  });

  test("prefix is empty", async () => {
    expect(config.prefix).toBe("");
  });
});
