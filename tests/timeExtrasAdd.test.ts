import { ITime } from "../lib/Time";
import TimeExtras from "../lib/TimeExtras";

test("time addition 1", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const add: ITime = {
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

  expect(TimeExtras.add(time, add)).toStrictEqual(result);
});

test("time addition 2", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const add: ITime = {
    hours: 1,
    minutes: 2,
    seconds: 3,
    milliseconds: 4,
  };

  const result: ITime = {
    hours: 1,
    minutes: 2,
    seconds: 3,
    milliseconds: 4,
  };

  expect(TimeExtras.add(time, add)).toStrictEqual(result);
});

test("time addition 3", () => {
  const time: ITime = {
    hours: 10,
    minutes: 10,
    seconds: 10,
    milliseconds: 10,
  };

  const add: ITime = {
    hours: 10,
    minutes: 10,
    seconds: 10,
    milliseconds: 10,
  };

  const result: ITime = {
    hours: 20,
    minutes: 20,
    seconds: 20,
    milliseconds: 20,
  };

  expect(TimeExtras.add(time, add)).toStrictEqual(result);
});

test("time addition 4", () => {
  const time: ITime = {
    hours: 0,
    minutes: 30,
    seconds: 30,
    milliseconds: 500,
  };

  const add: ITime = {
    hours: 0,
    minutes: 30,
    seconds: 30,
    milliseconds: 500,
  };

  const result: ITime = {
    hours: 1,
    minutes: 1,
    seconds: 1,
    milliseconds: 0,
  };

  expect(TimeExtras.add(time, add)).toStrictEqual(result);
});
