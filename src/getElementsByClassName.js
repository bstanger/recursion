// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var bodyEl = document.body;
	var childNodesEls = [bodyEl];
	bodyEl.childNodes.forEach(function(node) {
		childNodesEls.push(node);
	});
	
	var elsWithClassName = [];
	var checkForClassName = function(nodesList){
		var lastNode = nodesList[nodesList.length - 1];
		var lastNodeClasses = lastNode.classList;
		if(lastNodeClasses && lastNodeClasses.contains(className)){
			elsWithClassName.push(lastNode);
		}
		nodesList.pop();
		if(childNodesEls.length){
			checkForClassName(childNodesEls);
		} else {
			return elsWithClassName;
		}
	};

	if(childNodesEls.length){
		checkForClassName(childNodesEls);
		return elsWithClassName;
	}

};
