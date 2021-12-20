import Time, { ITime } from "../lib/Time";

test("time normalize 1", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  const timeNormalized: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});

test("time normalize 2", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 1000,
  };

  const timeNormalized: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 1,
    milliseconds: 0,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});

test("time normalize 3", () => {
  const time: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 60,
    milliseconds: 0,
  };

  const timeNormalized: ITime = {
    hours: 0,
    minutes: 1,
    seconds: 0,
    milliseconds: 0,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});

test("time normalize 4", () => {
  const time: ITime = {
    hours: 0,
    minutes: 60,
    seconds: 0,
    milliseconds: 0,
  };

  const timeNormalized: ITime = {
    hours: 1,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});

test("time normalize 5", () => {
  const time: ITime = {
    hours: 0,
    minutes: 60,
    seconds: 60,
    milliseconds: 1000,
  };

  const timeNormalized: ITime = {
    hours: 1,
    minutes: 1,
    seconds: 1,
    milliseconds: 0,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});

test("time normalize 6", () => {
  const time: ITime = {
    hours: 0,
    minutes: 122,
    seconds: 61,
    milliseconds: 2001,
  };

  const timeNormalized: ITime = {
    hours: 2,
    minutes: 3,
    seconds: 3,
    milliseconds: 1,
  };

  expect(Time.normalize(time)).toStrictEqual(timeNormalized);
});
