/* eslint-disable no-sync */

const fs = require("fs")
const path = require("path")
const glob = require("glob")

const sourcePattern = "src/**/*.js.flow"
const lastFile = "index.js.flow"
const outputDir = path.resolve(__dirname, "../dist")
const outputFile = path.resolve(__dirname, "../dist/index.js.flow")

const files = glob.sync(sourcePattern)

const fileContents = []

files
  .sort((a, b) => {
    // a.endsWith(lastFile)
    if (a.substring(a.length - lastFile.length) === lastFile) {
      return 1
    }

    // b.endsWith(lastFile)
    if (b.substring(b.length - lastFile.length) === lastFile) {
      return -1
    }

    return 0
  })
  .forEach(file => fileContents.push(fs.readFileSync(file, "utf8")))

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir)
}

fs.writeFileSync(outputFile, fileContents.join("\n"))
