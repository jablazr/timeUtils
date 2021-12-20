import { equals, summary, test } from "./MyTests";
import Time, { ITime } from "../Time";
import { isEqual } from "lodash-es";
import TimeExtras from "../TimeExtras";

test("time instance", () => {
  const time = new Time();
  return equals(time instanceof Time);
});

test("time from string 1", () => {
  const time = Time.fromString("");
  return equals(time.toString(), "0s");
});

test("time from string 2", () => {
  const time = Time.fromString("0:0:0.0");
  return equals(time.toString(), "0s");
});

test("time from string 3", () => {
  const time = Time.fromString("0");
  return equals(time.toString(), "0s");
});

test("time from string 4", () => {
  const time = Time.fromString("21:16.842");
  return equals(time.toString(), "21m 16s 842ms");
});

test("time from string 5", () => {
  const time = Time.fromString("18:08");
  return equals(time.toString(), "18m 8s");
});

test("time from string 6", () => {
  const time = Time.fromString("99:59:59.1000");
  return equals(time.toString(), "100h");
});

test("time from string 7", () => {
  const time = Time.fromString("80:61:08");
  return equals(time.toString(), "81h 1m 8s");
});

test("time string blank", () => {
  const time = new Time();
  return equals(time.toString(), "0s");
});

test("time string hour", () => {
  const time = new Time(12);
  return equals(time.toString(), "12h");
});

test("time string minute", () => {
  const time = new Time(0, 45);
  return equals(time.toString(), "45m");
});

test("time string second", () => {
  const time = new Time(0, 0, 30);
  return equals(time.toString(), "30s");
});

test("time string millisecond", () => {
  const time = new Time(0, 0, 0, 400);
  return equals(time.toString(), "400ms");
});

test("time string mix 1", () => {
  const time = new Time(12, 59, 59, 999);
  return equals(time.toString(), "12h 59m 59s 999ms");
});

test("time string mix 2", () => {
  const time = new Time(999, 0, 0, 999);
  return equals(time.toString(), "999h 999ms");
});

test("time string mix 3", () => {
  const time = new Time(0, 1, 2, 0);
  return equals(time.toString(), "1m 2s");
});

test("time string mix 4", () => {
  const time = new Time(0, 0, 8, 8);
  return equals(time.toString(), "8s 8ms");
});

test("time string mix 5", () => {
  const time = new Time(13, 1, 0, 44);
  return equals(time.toString(), "13h 1m 44ms");
});

test("time string colons 1", () => {
  const time = new Time();
  return equals(time.toString("colons"), "0:0:0.0");
});

test("time string colons 2", () => {
  const time = new Time(12, 50, 50, 44);
  return equals(time.toString("colons"), "12:50:50.44");
});

test("time string colons 3", () => {
  const time = new Time(0, 0, 120, 2999);
  return equals(time.toString("colons"), "0:2:2.999");
});

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

  return equals(isEqual(Time.normalize(time), timeNormalized));
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

  return equals(isEqual(Time.normalize(time), timeNormalized));
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

  return equals(isEqual(Time.normalize(time), timeNormalized));
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

  return equals(isEqual(Time.normalize(time), timeNormalized));
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

  return equals(isEqual(Time.normalize(time), timeNormalized));
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

  return equals(isEqual(Time.normalize(time), timeNormalized));
});

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

  return equals(isEqual(TimeExtras.add(time, add), result));
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

  return equals(isEqual(TimeExtras.add(time, add), result));
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

  return equals(isEqual(TimeExtras.add(time, add), result));
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

  return equals(isEqual(TimeExtras.add(time, add), result));
});

test("time subtraction 1", () => {
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

  return equals(isEqual(TimeExtras.subtract(time, subtract), result));
});

test("time subtraction 2", () => {
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

  return equals(isEqual(TimeExtras.subtract(time, subtract), result));
});

test("time subtraction 3", () => {
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
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  return equals(isEqual(TimeExtras.subtract(time, subtract), result));
});

test("time subtraction 4", () => {
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

  // const sub = Time.fromObject(TimeExtras.subtract(time, subtract));
  // console.log(Time.fromObject(result).toString());

  // console.log(sub.toString());

  return equals(isEqual(TimeExtras.subtract(time, subtract), result));
});

summary();
