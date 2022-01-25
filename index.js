const fs=require("fs");

const originalData = fs.readFileSync('question.js')
const newfile = fs.openSync("question.json", "w")
const data = fs.readFileSync('question.json')
if (data.toString().length === 0)
    fs.writeFileSync('question.json', originalData)
else
    fs.appendFileSync('question.json', originalData)