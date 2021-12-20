export interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export default class Time implements ITime {
  public hours: number;
  public minutes: number;
  public seconds: number;
  public milliseconds: number;

  public constructor(
    hours: number = 0,
    minutes: number = 0,
    seconds: number = 0,
    milliseconds: number = 0
  ) {
    const time: ITime = {
      hours,
      minutes,
      seconds,
      milliseconds,
    };

    const normalized = Time.normalize(time);

    this.hours = normalized.hours;
    this.minutes = normalized.minutes;
    this.seconds = normalized.seconds;
    this.milliseconds = normalized.milliseconds;
  }

  public static fromObject(object: ITime) {
    const time = Time.normalize(object);

    return new Time(time.hours, time.minutes, time.seconds, time.milliseconds);
  }

  public static fromString(string: string): Time {
    const parts = string.split(":");

    for (const part of parts) {
      if (isNaN(parseInt(part)) || part === "") {
        return new Time();
      }
    }

    const time: ITime = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };

    // has milliseconds
    if (parts.at(-1)?.includes(".")) {
      const [seconds, milliseconds] = parts.at(-1)?.split(".")!;

      time.seconds = parseInt(seconds);
      time.milliseconds = parseInt(milliseconds);
    } else {
      const seconds = parts.at(-1)!;
      time.seconds = parseInt(seconds);
    }

    const minutes = parts.at(-2);
    time.minutes = minutes ? parseInt(minutes) : 0;

    const hours = parts.at(-3);
    time.hours = hours ? parseInt(hours) : 0;

    const normalized = Time.normalize(time);

    return new Time(
      normalized.hours,
      normalized.minutes,
      normalized.seconds,
      normalized.milliseconds
    );
  }

  public static normalize(time: ITime) {
    const msCarryOver = Math.floor(time.milliseconds / 1000);
    time.seconds += msCarryOver;
    time.milliseconds %= 1000;

    const sCarryOver = Math.floor(time.seconds / 60);
    time.minutes += sCarryOver;
    time.seconds %= 60;

    const mCarryOver = Math.floor(time.minutes / 60);
    time.hours += mCarryOver;
    time.minutes %= 60;

    return time;
  }

  public set(time: ITime) {
    this.milliseconds = time.milliseconds;
    this.seconds = time.seconds;
    this.minutes = time.minutes;
    this.hours = time.hours;
  }

  public get(): ITime {
    return {
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
      milliseconds: this.milliseconds,
    };
  }

  public normalize() {
    this.set(Time.normalize(this.get()));
  }

  public toString(style: "pretty" | "colons" = "pretty"): string {
    const time = Time.normalize(this.get());

    let string = "";

    switch (style) {
      case "colons":
        string = `${time.hours}:${time.minutes}:${time.seconds}.${time.milliseconds}`;

        break;

      case "pretty":
        const doHours = time.hours > 0;
        const doMinutes = time.minutes > 0;
        const doMilliseconds = time.milliseconds > 0;
        const doSeconds =
          time.seconds > 0 || (!doHours && !doMinutes && !doMilliseconds);

        if (doHours) string += `${time.hours}h `;
        if (doMinutes) string += `${time.minutes}m `;
        if (doSeconds) string += `${time.seconds}s `;
        if (doMilliseconds) string += `${time.milliseconds}ms`;

        string = string.trim();

        break;
    }

    return string;
  }
}
