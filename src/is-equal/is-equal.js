/* eslint-disable no-unused-vars */
// @flow

import type { IsEqualType } from "./is-equal.js.flow"

const isEqual: IsEqualType = <A>(source1) => source2 => source1 === source2

export { isEqual }
