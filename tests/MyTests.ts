import chalk from "chalk";

const testingState = {
  testsRan: 0,
  testsSuccessful: 0,
};

interface IResult {
  pass: boolean;
  reason: string;
}

export function test(name: string, fn: () => IResult) {
  testingState.testsRan++;

  const result = fn();

  if (result.pass) {
    testingState.testsSuccessful++;
    console.log(name, chalk.green("succeeded"));
  } else {
    console.log(name, chalk.red("failed"));
    console.log("Reason: ", chalk.red(result.reason));
  }
}

export function equals(arg1: any, arg2: any = true): IResult {
  if (arg1 === arg2) {
    return {
      pass: true,
      reason: "",
    };
  } else {
    return {
      pass: false,
      reason: `${arg1} !== ${arg2}`,
    };
  }
}

export function summary() {
  console.log("\n=== Summary ===");

  console.log(
    "Successful tests:",
    `${testingState.testsSuccessful}/${testingState.testsRan}`
  );
}
