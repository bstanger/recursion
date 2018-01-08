// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // Handle strings, numbers, booleans, null, undefined
  if(typeof obj === "string") {
  	return '"' + obj + '"';
  } else if (typeof obj === "number" || typeof obj === undefined || obj === null || typeof obj === "boolean") {
  	return '' + obj;
  }
  
  if(typeof obj === "object"){

  	// Handle arrays
  	if(Array.isArray(obj)){
  		if(obj.length == 0) { // Base case
  			return "[]";
  		}
		var arrOfArrStrings = obj.map(function(arrayItem){ // Recursive case
			return stringifyJSON(arrayItem);
		});
		return "[" + arrOfArrStrings + "]";

  	// Handle objects
  	} else {
  		if (_.isEmpty(obj)) { // Base case
  			return "{}";
  		}
  		
  		var arrOfObjStrings = [];

  		for (var objKey in obj){ // Recursive case
  			var objKeyValue = obj[objKey];
  			var keyValueString = stringifyJSON(objKey) + ":" + stringifyJSON(objKeyValue);
  			arrOfObjStrings.push(keyValueString);

  			if(stringifyJSON(objKey) === undefined || stringifyJSON(objKeyValue) === undefined ||
  				typeof objKey === "function" || typeof objKeyValue === "function"){
  					arrOfObjStrings.pop();
  			}
  		};
  		return "{" + arrOfObjStrings + "}";
  	}
  }
};
