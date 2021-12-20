import Time from "./lib/Time";
import TimeExtras from "./lib/TimeExtras";

const time = Time.fromString("95");
const sub = Time.fromString("27.36");

const seconds = TimeExtras.toSeconds(TimeExtras.add(time, sub));

console.log(time.toString());
console.log(seconds);
