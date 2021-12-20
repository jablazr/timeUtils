import Time from "./Time";
import TimeExtras from "./TimeExtras";

const time = Time.fromString("21:16.842");
const sub = Time.fromString("18:08");

const seconds = TimeExtras.toSeconds(TimeExtras.subtract(time, sub));

console.log(time.toString());
console.log(seconds);
