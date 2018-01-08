// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  let arrayContent = [];

  // Handle strings, numbers, booleans, null, undefined
  if(typeof obj === "string") {
  	return '"' + obj + '"';
  } else if (typeof obj === "number" || typeof obj === undefined || obj === null || typeof obj === "boolean") {
  	return '' + obj;
  }

  
  if(typeof obj === "object"){

  	// Handle arrays
  	if(Array.isArray(obj)){
  		if(obj.length == 0) {
  			return "[]";
  		} else {
  			obj.forEach(function(item){
  				arrayContent.push(stringifyJSON(item));
  			});
  			return "[" + arrayContent + "]";
  		}
  	}
  }
};
