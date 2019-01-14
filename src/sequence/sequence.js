/**
 * Create an array of numbers
 *
 * @name   sequence
 *
 * @tag Number
 * @signature (step: number) => (start: number, end: number): number[]
 *
 * @param  {number}  step   The step
 * @param  {number}  start  Left side interval
 * @param  {number}  end    Right side interval
 *
 * @return {number[]}
 *
 * @example
 *
 * sequence(1)(1, 5)   // [1, 2, 3, 4, 5]
 * sequence(3)(1, 5)   // [1, 4]
 * sequence(-1)(2, -3) // [ 2, 1, 0, -1, -2, -3 ]
 */
module.exports = step => (start, end) => {
  if (step === 0) {
    throw new Error(
      `Invalid "step" value, must be non zero. Got "step": ${step}, "start": ${start}, "end": ${end}`
    )
  }

  const result = []

  for (
    let i = 0;
    i <= Math.floor(Math.abs(start - end) / Math.abs(step));
    i++
  ) {
    result.push(start + i * step)
  }

  return result
}
