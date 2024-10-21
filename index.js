//Your code here
// get the dogter element 
const dodger= document.getElementById("dodger");

// change color to pink
dodger.style.backgroundColor = "#FF69B4"; 

// move the dodger up/down: 
dodger.style.bottom = "0px"; // "100px" is a string value 
// 
dodger.style.left = "0px";


// Use arrow key to move to the left (keydown)
function moveDodgerLeft(){
  const leftNumbers = dodger.style.left.replace("px", ""); // current value of style.left = 0px : we are replacing the px with nothing. "",  result stored in leftNumbere 
  const left = parseInt(leftNumbers, 10);// we change the string nunmber to an interger "100" to 100 : store the result to left. 
  if (left>0){ // prevents the arrow to move passed the left border 
      dodger.style.left = `${left + 1}px`; // update the dogder 
  }

}

//event listener
document.addEventListener("keydown", function (event) {
  if (event.key ==="ArrowLeft"){
    moveDodgerLeft(); // we are now callin the moveDogdter left  function. 
  }
});

// use Arrowkey right to move the dodger to the right (keydown )


function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers,10);
    
    if (left <360) {
    dodger.style.left = `${left + 1}px`; }
   } 

    document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
  });
    
    
    