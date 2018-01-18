
printPyramid(5);
printPyramid_left(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
// TODO
    // print that pyramid! Put the code inside the fn
function printPyramid(height){
    console.log("The real assignment is pending...")
}
function printPyramid_left(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    
    for(var i=1; i<=height; i++){
        var row ='';
        for(var j=1; j<=(height -i); j++)
        {
            row +=' ';
        }
        for (var k=1; k<=i; k++){
            if(i==1 && k==1)
            {
                row = ' '
            }
            else
            {
            row = row+'#';
            }
        }
        console.log(row);
    }
}
     


