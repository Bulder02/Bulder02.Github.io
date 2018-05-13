var drops = [];
var gravity = 0.1;
var growth = 1;
var cat;
var y = 0;
let img;

function setup() {
  createCanvas(500, 500);
  cat = loadImage("libraries/raincat.png")
  for (var i = 0; i < 5; i++) {
     drops.push(new Drop());
  }
}

function Drop() {
  this.x = random(width);
  this.y = -10;
  this.w = 50;
  this.h = 15;
  this.length = 10;
  this.speed = random(0, 3);
  this.endY = random(200, 450);
  this.falling = true;

  this.show = function() {
    if (this.falling) {
      stroke(0, 0, 255);
      line(this.x, this.y, this.x, this.y + this.length);
    }
  };

  this.fall = function() {
    this.y = this.y + this.speed;
    this.speed = this.speed + gravity;
  };

  this.puddle = function() {
    if (this.y > this.endY) {
      this.speed = 0;
      this.length = 0;
      noFill();
      ellipse(this.x, this.y, this.w, this.h);
      this.w = this.w + growth;
      this.h = this.h + growth / 2;
      this.falling = false;
    }
  };

  this.reset = function() {
    if (this.w > height / 4) {
      this.x = random(width);
      this.y = -10;
      this.length = 10;
      this.speed = 0;
      this.w = 30;
      this.h = 15;
      this.falling = true;
    }
  };
}


function draw() {
  background(200);
  image (cat, 0, 0);

  for (var i = 0; i < drops.length; i = i + 1) {
    drops[i].show();
    drops[i].fall();
    drops[i].puddle();
    drops[i].reset();
  }
}
