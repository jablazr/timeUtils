import Time from "../lib/Time";

test("time from string 1", () => {
  const time = Time.fromString("");
  expect(time.toString()).toBe("0s");
});

test("time from string 2", () => {
  const time = Time.fromString("0:0:0.0");
  expect(time.toString()).toBe("0s");
});

test("time from string 3", () => {
  const time = Time.fromString("0");
  expect(time.toString()).toBe("0s");
});

test("time from string 4", () => {
  const time = Time.fromString("21:16.842");
  expect(time.toString()).toBe("21m 16s 842ms");
});

test("time from string 5", () => {
  const time = Time.fromString("18:08");
  expect(time.toString()).toBe("18m 8s");
});

test("time from string 6", () => {
  const time = Time.fromString("99:59:59.1000");
  expect(time.toString()).toBe("100h");
});

test("time from string 7", () => {
  const time = Time.fromString("80:61:08");
  expect(time.toString()).toBe("81h 1m 8s");
});

test("time from string 8", () => {
  const time = Time.fromString("asdf");
  expect(time.toString()).toBe("0s");
});

test("time from string 9", () => {
  const time = Time.fromString("95");
  expect(time.toString()).toBe("1m 35s");
});
