import { ITime } from "../lib/Time";
import TimeExtras from "../lib/TimeExtras";

test("time difference 1", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const subtract: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const result: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  expect(TimeExtras.delta(time, subtract)).toStrictEqual(result);
});

test("time difference 2", () => {
  const time: ITime = {
    hours: 10,
    minutes: 10,
    seconds: 10,
    milliseconds: 10,
  };

  const subtract: ITime = {
    hours: 5,
    minutes: 5,
    seconds: 5,
    milliseconds: 5,
  };

  const result: ITime = {
    hours: 5,
    minutes: 5,
    seconds: 5,
    milliseconds: 5,
  };

  expect(TimeExtras.delta(time, subtract)).toStrictEqual(result);
});

test("time difference 3", () => {
  const time: ITime = {
    hours: 1,
    minutes: 2,
    seconds: 3,
    milliseconds: 4,
  };

  const subtract: ITime = {
    hours: 2,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const result: ITime = {
    hours: 0,
    minutes: 57,
    seconds: 56,
    milliseconds: 996,
  };

  expect(TimeExtras.delta(time, subtract)).toStrictEqual(result);
});

test("time difference 4", () => {
  const time: ITime = {
    hours: 100,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const subtract: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 1,
  };

  const result: ITime = {
    hours: 99,
    minutes: 59,
    seconds: 59,
    milliseconds: 999,
  };

  expect(TimeExtras.delta(time, subtract)).toStrictEqual(result);
});
