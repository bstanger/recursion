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
		var arrayContent = obj.map(function(arrayItem){ // Recursive case
			return stringifyJSON(arrayItem);
		});
		return "[" + arrayContent + "]";

  	// Handle objects
  	} else {
  		if (_.isEmpty(obj)) { // Base case
  			return "{}";
  		}
  		var objContainer = [];
  		var keyValueString = "";

  		for (var objKey in obj){ // Recursive case
  			var objKeyValue = obj[objKey];
  			keyValueString = stringifyJSON(objKey) + ":" + stringifyJSON(objKeyValue);
  			objContainer.push(keyValueString);
  			
  			if(stringifyJSON(objKey) === undefined || stringifyJSON(objKeyValue) === undefined ||
  				typeof objKey === "function" || typeof objKeyValue === "function"){
  					objContainer.pop();
  			}
  		};
  		return "{" + objContainer + "}";
  	}
  }
};
