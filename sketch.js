let angle = -1;
let a = 0.5; 
let aSwitch = -1; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255,255,255,5);

  if (a >= 1 || a <= 0) {
    aSwitch *= -1;
  }

  a += 0.01*aSwitch;
  
  translate(windowWidth / 2, windowHeight / 2);
  rotate(a);


  stroke(255, 204, 0);
  star(0, 0, 350, 10,2);

  stroke(0);
  star(0, 0, 300, 30,2);
  star(0, 0, 20, 70,2);
  star(0, 0, 250, 50,2);


}

function star(x, y, s, c,sw) {
  strokeWeight(sw);
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