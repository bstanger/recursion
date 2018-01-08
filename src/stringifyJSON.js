// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringOutput = "";

var stringifyJSON = function(obj) {
  // your code goes here
  console.log("Object: " + obj);

  // Handle strings and numbers
  if(typeof obj === "string") return;
  if(typeof obj === "number") return '' + number;
  if(obj === undefined || obj === null || typeof obj === "boolean") return '' + obj;

  // var objLength = obj.length;
  // console.log("Length: " + objLength);

  // var stringOfIndexVal = obj[objLength - 1].toString();
  // stringOutput = stringOutput + stringOfIndexVal;
  // return stringOutput;
};
