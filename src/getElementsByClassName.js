// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	// Create helper list of all nodes
	var bodyEl = document.body;
	var childNodesEls = [bodyEl];
	var findChildNodes = function(childNodesList){
		childNodesList.forEach(function(node) {
			if(node.nodeType === 1){
				childNodesEls.push(node);
				findChildNodes(node.childNodes);
			}
		});
	};
	findChildNodes(bodyEl.childNodes);

	// Return all nodes with class name
	var elsWithClassName = [];
	var checkForClassName = function(nodesList){
		var lastNode = nodesList[nodesList.length - 1];
		var lastNodeClasses = lastNode.classList;
		if(lastNodeClasses && lastNodeClasses.contains(className)){
			elsWithClassName.unshift(lastNode);
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
