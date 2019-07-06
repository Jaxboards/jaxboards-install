import path from "path";
import { exec, ExecException } from "child_process";

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

test("arguments set the arguments", async (): Promise<void> => {
  const result: CommandResult = await runCommand(
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
  expect(result.code).toBe(0);

  const config = JSON.parse(result.stdout);
  expect(config.boardname).toBe("test");
  expect(config.domain).toBe("example.test");
  expect(config.mail_from).toBe("Test <test@example.test>");
  expect(config.sql_host).toBe("example.com");
  expect(config.sql_port).toBe(1);
  expect(config.sql_db).toBe("example");
  expect(config.sql_username).toBe("example");
  expect(config.sql_password).toBe("example");
  expect(config.sql_prefix).toBe("example");
  expect(config.installed).toBe(true);
  expect(config.service).toBe(false);
  expect(config.prefix).toBe("");
});
