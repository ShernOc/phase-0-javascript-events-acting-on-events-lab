//Your code here

// Move dodger left 

// get the dogter element 
const dodger= document.getElementById("dodger");

// change color to pink
dodger.style.backgroundColor = "#FF69B4"; 

// move the dodger up/down: 
dodger.style.bottom = "0px"; // "100px" is a string value 
// 
dodger.style.left = "0";

// Use arrow key to move to the left (keydown)

document.addEventListener("keydown", function (event) {
  console.log(event);
});



// use Arrowkey right to move the dodger to the right (keydown )

// const dodger = document.getElementById('dodger'); 
// dodger.style.backgroundColor ="#FF69B4" ; // #"#000000" = black 


// // Move Dogdter left()

//  function moveDodgerLeft() {
//     const leftNumbers = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`; }
//     }
    
//     document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });

// //Move dodger to the right 

// function moveDodgerRight() {
//     const rightNumbers = dodger.style.left.replace("px", "");
//     const right = parseInt(rightNumbers,10);
    
//     if (right < 360) {
//     dodger.style.left = `${right + 1}px`; }
//    } 

//     document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
//   });
    
    
    