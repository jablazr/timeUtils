import Time, { ITime } from "./Time";

const TimeExtras = {
  add(time: ITime, addend: ITime): ITime {
    time.milliseconds += addend.milliseconds;
    time.seconds += addend.seconds;
    time.minutes += addend.minutes;
    time.hours += addend.hours;

    Time.normalize(time);

    return time;
  },

  delta(time: ITime, difference: ITime): ITime {
    if (this.toSeconds(difference) > this.toSeconds(time)) {
      [time, difference] = [difference, time];
    }

    time.milliseconds -= difference.milliseconds;
    if (time.milliseconds < 0) {
      time.milliseconds += 1000;
      time.seconds--;
    }

    time.seconds -= difference.seconds;
    if (time.seconds < 0) {
      time.seconds += 60;
      time.minutes--;
    }

    time.minutes -= difference.minutes;
    if (time.minutes < 0) {
      time.minutes += 60;
      time.hours--;
    }

    time.hours -= difference.hours;
    if (time.hours < 0) {
      time.milliseconds = 0;
      time.seconds = 0;
      time.minutes = 0;
      time.hours = 0;
    }

    Time.normalize(time);

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
