import Time from "../lib/Time";

test("time instance", () => {
  const time = new Time();
  expect(time).toBeInstanceOf(Time);
});
