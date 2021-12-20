import Time, { ITime } from "./Time";

const TimeExtras = {
  add(time: ITime, add: ITime): ITime {
    time.milliseconds += add.milliseconds;
    time.seconds += add.seconds;
    time.minutes += add.minutes;
    time.hours += add.hours;

    time = Time.normalize(time);

    return time;
  },

  subtract(time: ITime, subtract: ITime): ITime {
    time.milliseconds -= subtract.milliseconds;
    if (time.milliseconds < 0) {
      time.milliseconds += 1000;
      time.seconds--;
    }

    time.seconds -= subtract.seconds;
    if (time.seconds < 0) {
      time.seconds += 60;
      time.minutes--;
    }

    time.minutes -= subtract.minutes;
    if (time.minutes < 0) {
      time.minutes += 60;
      time.hours--;
    }

    time.hours -= subtract.hours;
    if (time.hours < 0) {
      time.milliseconds = 0;
      time.seconds = 0;
      time.minutes = 0;
      time.hours = 0;
    }

    time = Time.normalize(time);

    return time;
  },

  toSeconds(time: ITime): number {
    let seconds = 0;
    seconds += 0.001 * time.milliseconds;
    seconds += time.seconds;
    seconds += 60 * time.minutes;
    seconds += 3600 * time.hours;

    return seconds;
  },
};

export default TimeExtras;
