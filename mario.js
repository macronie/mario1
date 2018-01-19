
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
    //(1) first look for parent id, find the child "id" which is to be modified, remove the child form the tree.
    var para1 = document.getElementById("pyramid");
    var child = document.getElementById("notice");
    para1.removeChild(child);

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // you can delete this now
        // console.log(rowStr)
    

        // TODO 1
        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">
        //find the spot, to add the new element. create a new element, chreate a node for the new element,
        //append the node as the child of the parent id
        var para = document.createElement("p");
        var node = document.createTextNode(rowStr);
        para.appendChild(node);

        var element = document.getElementById("pyramid");
        element.appendChild(para);
    }
    
}
