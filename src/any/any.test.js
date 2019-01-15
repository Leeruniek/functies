const test = require("tape")

const any = require("./any")

const isNumber = source => Number.isFinite(source)

test("core::any", t => {
  t.equal(
    any(isNumber)([1, "string", NaN]),
    true,
    "Check any element is number"
  )

  t.equal(any(isNumber)([null, "2", {}]), false, "Check any element is number")

  t.end()
})
