let angle = -1;
let a = 1; // Define w
let aSwitch = 1; // Define wSwitch

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5);
}

function draw() {
  // Ensure w and wSwitch work as intended
  if (a >= 2 || a <= 0) {
    aSwitch *= -1;
  }
  a += aSwitch * 0.01;

  // Adjust angle for rotation
  a += 0.01;
  
  // Reset the matrix and rotate from the center of the canvas
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);
  
  // Call the star function with adjusted coordinates
  star(0, 0, 300, 30);
  star(0, 0, 20, 70);
  star(0, 0, 700, 10);
  star(0, 0, 250, 50);
}

function star(x, y, s, c) {
  line(x - s / 2, y, x - c / 2, y + c / 2);
  line(x - c / 2, y + c / 2, x, y + s / 2);
  line(x, y + s / 2, x + c / 2, y + c / 2);
  line(x + c / 2, y + c / 2, x + s / 2, y);
  line(x + s / 2, y, x + c / 2, y - c / 2);
  line(x + c / 2, y - c / 2, x, y - s / 2);
  line(x, y - s / 2, x - c / 2, y - c / 2);
  line(x - c / 2, y - c / 2, x - s / 2, y);
}

//make use of translate to set the (0,0)
// function star(x,y,w){
// 	let r = w/2;
// 	push();
// 	translate(x,y);
// 	line();
// 	...
// 	...
// 	pop();
// }