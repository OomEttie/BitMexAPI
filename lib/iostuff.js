// file system module to perform file operations
const fs = require('fs');

module.exports = function (jsonData, callback) {
  // parse json
  // console.log("jsonData->", jsonData);
  // var jsonObj = JSON.parse(jsonData);
  var jsonObj = jsonData;
  console.log(jsonObj);

  // stringify JSON Object
  var jsonContent = JSON.stringify(jsonObj);
  console.log(jsonContent);

  fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}