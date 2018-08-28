// Based on Daniel Shiffman's Coding challenges in Processing
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var cols, rows;
var scl = 30;
var w;
var h;
var flying = 0;
// var noiseInc = 0.2;
var terrain;
var flyingRate = 0.05;
var peak = 200;
var valley = -100;

function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height, WEBGL);
  sketchCanvas.parent("backgroundCanvas");

  w = width * 2;
  h = height;

  cols = round(w / scl);
  rows = round(h / scl);

  terrain = [];
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
  }
}

function draw() {

  flying -= flyingRate;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      // control limit of noise
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, peak, valley);
      //map(value,start1,stop1,start2,stop2,[withinBounds])
      xoff += 0.2;
    }
    yoff += 0.2;
  }

  background(255);
  translate(0, height / 3);
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  // using quads
  for (var y = 0; y < (rows - 1); y++) {
    beginShape(QUADS);
    strokeWeight(0.5);
    stroke(0);
    //fill(255);
    noFill();
    for (var x = 0; x < cols - 1; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][(y + 1)]);
      vertex((x + 1) * scl, (y + 1) * scl, terrain[(x + 1)][(y + 1)]);
      vertex((x + 1) * scl, y * scl, terrain[(x + 1)][y]);
    }
    endShape();
  }



  // for (var y = 0; y < (rows - 1); y++) {
  //   beginShape(TRIANGLES);
  //   strokeWeight(0.5);
  //   stroke(0);
  //   //fill(255);
  //   noFill();
  //   for (var x = 0; x < cols - 1; x++) {
  //     vertex(x * scl, y * scl, terrain[x][y]);
  //     vertex(x * scl, (y + 1) * scl, terrain[x][(y + 1)]);
  //     vertex((x + 1) * scl, y * scl, terrain[(x + 1)][y]);
  //     vertex(x * scl, (y + 1) * scl, terrain[x][(y + 1)]);
  //     vertex((x + 1) * scl, (y + 1) * scl, terrain[(x + 1)][(y + 1)]);
  //   }
  //   endShape();
  // }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
