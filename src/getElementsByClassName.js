// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	// Iterate through all nodes, check for class name, and then iterate children
	var bodyEl = document.body;
	var elsWithClassName = [];
	if(bodyEl.classList.contains(className)) elsWithClassName.push(bodyEl);
	var findChildNodes = function(childNodesList){
		childNodesList.forEach(function(node) {
			if(node.nodeType === 1 && node.classList && node.classList.contains(className)){
				elsWithClassName.push(node);
			}
			if(node.childNodes) findChildNodes(node.childNodes);
		});
	};
	findChildNodes(bodyEl.childNodes);

	return elsWithClassName;
};
