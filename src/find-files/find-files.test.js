import test from "tape"
import { endsWith } from "../ends-with/ends-with"
import { findFiles } from "./find-files"

test("fs::findFiles", t => {
  //
  const filesInFolder = findFiles()(__dirname)

  t.equals(filesInFolder.length, 5, "Find all files in folder")

  //
  const filesByRegExp = findFiles(/.*\.test\.js/)(__dirname)

  t.equals(filesByRegExp.length, 1, "Find files using regexp filter")

  t.equals(
    endsWith(".test.js")(filesByRegExp[0]),
    true,
    'Find all files matching ".test.js"'
  )

  //
  const filesByFunction = findFiles(endsWith(".test.js"))(__dirname)

  t.equals(
    endsWith(".test.js")(filesByFunction[0]),
    true,
    "Find files using filter function"
  )

  //
  const filesInMultipleFolders = findFiles(/dummy/)([
    `${__dirname}/dummy-test-folder`,
    `${__dirname}/dummy-test-folder-2`,
  ])

  t.equals(filesInMultipleFolders.length, 2, "Find files in multiple folders")

  t.end()
})
