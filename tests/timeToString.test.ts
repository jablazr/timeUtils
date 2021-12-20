import Time from "../lib/Time";

test("time string blank", () => {
  const time = new Time();
  expect(time.toString()).toBe("0s");
});

test("time string hour", () => {
  const time = new Time(12);
  expect(time.toString()).toBe("12h");
});

test("time string minute", () => {
  const time = new Time(0, 45);
  expect(time.toString()).toBe("45m");
});

test("time string second", () => {
  const time = new Time(0, 0, 30);
  expect(time.toString()).toBe("30s");
});

test("time string millisecond", () => {
  const time = new Time(0, 0, 0, 400);
  expect(time.toString()).toBe("400ms");
});

test("time string mix 1", () => {
  const time = new Time(12, 59, 59, 999);
  expect(time.toString()).toBe("12h 59m 59s 999ms");
});

test("time string mix 2", () => {
  const time = new Time(999, 0, 0, 999);
  expect(time.toString()).toBe("999h 999ms");
});

test("time string mix 3", () => {
  const time = new Time(0, 1, 2, 0);
  expect(time.toString()).toBe("1m 2s");
});

test("time string mix 4", () => {
  const time = new Time(0, 0, 8, 8);
  expect(time.toString()).toBe("8s 8ms");
});

test("time string mix 5", () => {
  const time = new Time(13, 1, 0, 44);
  expect(time.toString()).toBe("13h 1m 44ms");
});

test("time string colons 1", () => {
  const time = new Time();
  expect(time.toString("colons")).toBe("0:0:0.0");
});

test("time string colons 2", () => {
  const time = new Time(12, 50, 50, 44);
  expect(time.toString("colons")).toBe("12:50:50.44");
});

test("time string colons 3", () => {
  const time = new Time(0, 0, 120, 2999);
  expect(time.toString("colons")).toBe("0:2:2.999");
});
