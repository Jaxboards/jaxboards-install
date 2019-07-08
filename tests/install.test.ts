import path from "path";
import { exec, ExecException } from "child_process";
import { Config } from "options";

interface CommandResult {
  code: number;
  error: ExecException | null;
  stdout: string;
  stderr: string;
}

function runCommand(args: string[], cwd: string): Promise<CommandResult> {
  return new Promise((resolve): void => {
    exec(
      `ts-node ${path.resolve("./src/install.ts")} ${args.join(" ")}`,
      { cwd },
      (error: ExecException | null, stdout: string, stderr: string): void => {
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

test("Help prints and returns 0", async (): Promise<void> => {
  const result: CommandResult = await runCommand(["--help"], ".");
  expect(result.code).toBe(0);
});

describe("testing json output with all commands entered", (): void => {
  let result: CommandResult;
  let config: Config;

  beforeAll(
    async (): Promise<void> => {
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
    }
  );

  test("result code is 0 when setting all arguments", async (): Promise<
    void
  > => {
    expect(result.code).toBe(0);
  });

  test("--boardname set the boardname", async (): Promise<void> => {
    expect(config.boardname).toBe("test");
  });

  test("--domain set the domain", async (): Promise<void> => {
    expect(config.domain).toBe("example.test");
  });

  test("--mail_from set the mail_from", async (): Promise<void> => {
    expect(config.mail_from).toBe("Test <test@example.test>");
  });

  test("--sql_host set the sql_host", async (): Promise<void> => {
    expect(config.sql_host).toBe("example.com");
  });

  test("--sql_port set the sql_port", async (): Promise<void> => {
    expect(config.sql_port).toBe(1);
  });

  test("--sql_db set the sql_db", async (): Promise<void> => {
    expect(config.sql_db).toBe("example");
  });

  test("--sql_username set the sql_username", async (): Promise<void> => {
    expect(config.sql_username).toBe("example");
  });

  test("--sql_password set the sql_password", async (): Promise<void> => {
    expect(config.sql_password).toBe("example");
  });

  test("--sql_prefix set the sql_prefix", async (): Promise<void> => {
    expect(config.sql_prefix).toBe("example");
  });

  test("installed is true", async (): Promise<void> => {
    expect(config.installed).toBe(true);
  });

  test("service is false", async (): Promise<void> => {
    expect(config.service).toBe(false);
  });

  test("prefix is empty", async (): Promise<void> => {
    expect(config.prefix).toBe("");
  });
});
