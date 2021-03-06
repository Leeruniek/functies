/* eslint-disable no-sync */

import path from "path"
import fs from "fs"
import { pipe } from "../pipe/pipe"
import { map } from "../map/map"
import { push } from "../push/push"
import { flatten } from "../flatten/flatten"
import { reduce } from "../reduce/reduce"

/**
 * Determines if file name valid.
 *
 * @param  {Function|RegExp}   match  The match
 *
 * @return {boolean}  True if file name valid, False otherwise.
 */
const isFileNameValid = match => fileName =>
  typeof match === "function"
    ? match.call(null, fileName)
    : match.test(fileName)

/**
 * Reads a folder contents
 *
 * @param  {String}    dir  The dir path
 *
 * @return {string[]}  Array of files paths
 */
const readDir = dir =>
  pipe(
    fs.readdirSync,
    map(file => path.resolve(dir, file))
  )(dir)

/**
 * Determines if dir.
 *
 * @param  {string}   dirPath  The dir path
 *
 * @return {boolean}  True if dir, False otherwise.
 */
const isDir = dirPath => fs.statSync(dirPath).isDirectory()

/**
 * Recursive dir walk with regular expression matching on file name
 *
 * @param  {Object}           arg1             Function props
 * @param  {Function|RegExp}  arg1.test        Test function or RegExp to match
 *                                             file name agains
 * @return {string[]}         Array of files paths
 *
 * @example
 * find({test: /*.\.plugin\.js/})("./root-folder")
 */

const matchInFolder = test =>
  pipe(
    readDir,
    reduce(
      (acc, filePath) =>
        isDir(filePath)
          ? [...acc, ...matchInFolder(test)(filePath)]
          : isFileNameValid(test)(path.basename(filePath))
          ? push(filePath)(acc)
          : acc,
      []
    )
  )

/**
 * Used in microservices, dont remove unless it gets replaced
 *
 * @deprecated Use glob
 */
const findFiles = (test = /.*/) =>
  pipe(
    map(matchInFolder(test)),
    flatten
  )

export { findFiles }
