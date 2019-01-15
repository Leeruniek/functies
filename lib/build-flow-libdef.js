/* eslint-disable no-sync */

const fs = require("fs")
const path = require("path")

const findFiles = require("../src/find-files/find-files.js")

const findPattern = /.*\.js\.flow$/
const sourceDir = path.resolve(__dirname, "../src")
const sourceFile = path.resolve(__dirname, "../src/index.js.flow")
const outputDir = path.resolve(__dirname, "../dist")
const outputFile = path.resolve(__dirname, "../dist/index.js.flow")

const files = findFiles(findPattern)(sourceDir)
const fileContents = []

files
  .sort((a, b) => {
    if (a === sourceFile) {
      return 1
    }
    if (b === sourceFile) {
      return -1
    }

    return 0
  })
  .forEach(file => fileContents.push(fs.readFileSync(file, "utf8")))

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

fs.writeFileSync(outputFile, fileContents.join("\n"))
