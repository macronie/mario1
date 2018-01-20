
/**
 * determineHeightAndThenDrawPyramid
 *
 * Determines the current value that the user has typed in the 'How high?' text-box,
 * and then draws a pyramid with that height.
 */
function determineHeightAndThenDrawPyramid() {

    // just so we know we're here
    console.log("someone invoked the determineHeightAndThenDrawPyramid function!");

    // TODO 3
    // figure out the height the user typed (replace the "5" below)
    //heightStr = "5";
    //<input type="text" id="height"/>
    heightStr = document.getElementById("height").value;
    // here we convert the string to an int
    height = parseInt(heightStr);
    // TODO 2 - Done
    // draw the pyramid with the given height
    drawPyramid(height);
}


// TODO 1 - Done - works fine
// hook up the button's click event to our determineHeightAndThenDrawPyramid function
//document.getElementById("draw").onclick = function() {determineHeightAndThenDrawPyramid()};
//   var button = document.querySelector("button");
//   button.addEventListener("click", determineHeightAndThenDrawPyramid());



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {
     //

     // TODO 4
     // before drawing, clear the old content
     //<div id="pyramid"></div>
      var elem = document.getElementById("pyramid");
      elem.innerHTML = "";

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
        // var para = document.createElement("p");
        // var node = document.createTextNode(rowStr);
        // para.appendChild(node);

        // var element = document.getElementById("pyramid");
        // element.appendChild(para);
    }
}
