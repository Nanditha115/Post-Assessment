const fs = require("fs");
const csvParser = require("csv-parser");
const result = [];

fs.createReadStream("./students.csv")

  .pipe(csvParser())

  .on("data", (data) => {
    result.push(data);
  })

  .on("end", () => {
    result.sort((a, b) => a.Age - b.Age);
    console.log(result);
    Average();
  });

function Average() {
  var grade = result.map((row) => row.Grade);
  console.log(grade);
  const average =
    grade.reduce((a, b) => parseInt(a) + parseInt(b), 0) / grade.length;
  console.log(`The average is: ${average}`);
}
