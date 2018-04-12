let x = 0;
let img;
let speed = 5;

function preload() {
  // you will need to change this to the file path to your image
  img = loadImage('libraries/superMarioClouds_0.png');
  cat = loadImage('libraries/kitty.png');
}

function setup() {
  createCanvas(500, 500);
  background(255);
}
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height


	function draw() {
  background(255);
  image(cat, 150, 300, img.width/2, img.height/2);
	image(img, x, 10, img.width/2, img.height/2);
	x = x +speed;
    if (x >= 300) {
       speed = -speed;
  }    else if (x < 0) {
       speed = -speed
  }
    }
