import Time, { ITime } from "./Time";

const timeValues: ITime = {
  hours: 0,
  minutes: 122,
  seconds: 61,
  milliseconds: 2001,
};

const time = Time.fromObject(timeValues);

console.log(time.toString());
