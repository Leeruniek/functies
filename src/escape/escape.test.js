import test from "tape"
import { escapeRegExp, escapeHTML } from ".."

test("string::escapeHTML", t => {
  const actual = escapeHTML(
    "<script type='text/javascript'>alert('HERE'S BOBBY')</script>"
  )
  const expected =
    "&lt;script type=&#39;text&#47;javascript&#39;&gt;alert(&#39;HERE&#39;S BOBBY&#39;)&lt;&#47;script&gt;"

  t.equal(
    actual,
    expected,
    "HTML special chars are translated for safe rendering"
  )

  t.end()
})

test("string::escapeRegExp", t => {
  const actualT1 = escapeRegExp("lorem. ipsum [dolor] (sit amet)?")
  const expectedT1 = "lorem\\. ipsum \\[dolor\\] \\(sit amet\\)\\?"

  t.equal(actualT1, expectedT1, "Chars: (, ), [, ], ?, . should be escaped")

  const actualT2 = escapeRegExp("Alice + Bob = $orry | A < B | f* => {}")
  const expectedT2 = "Alice \\+ Bob = \\$orry \\| A \\< B \\| f\\* =\\> \\{\\}"

  t.equal(
    actualT2,
    expectedT2,
    "Chars: +, $, |, <, >, *, {, } should be escaped"
  )

  t.end()
})
