const {sumTwoNumbers} = require("./main")

it("test", () => {
  expect(sumTwoNumbers(2, 5)).toBe(7)
  expect(sumTwoNumbers(5, 5)).toBe(10)
})