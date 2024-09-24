let angle = 0;
let lastMouseX = 0;
let lastMouseY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  lastMouseX = mouseX;
  lastMouseY = mouseY;

}

function draw() {
  background(255,255,255,25);

  // angle update
  if (mouseIsPressed) {
    let deltaX = mouseX - lastMouseX;
    let deltaY = mouseY - lastMouseY;
    angle += deltaX * 0.01;
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;

  translate(windowWidth / 2, windowHeight / 2);
  rotate(angle);

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
