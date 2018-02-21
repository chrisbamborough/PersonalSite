// Based on Daniel Shiffman's Coding challenges in Processing
// http://codingrainbow.com
// http://patreon.com/codingrainbow

var cols, rows;
var scl = 20;
var w = 3000;
var h = 1800;

var flying = 0;
var noiseInc = 0.2;
var terrain;
var flyingRate = 0.1;
var peak = 50;
var valley = -50;

// var panelParent = document.getElementById('backgroundCanvas');
//
// var panel = QuickSettings.create(600, 100, 'Terrain Controls')
//   .addRange("flyingRate", 0.01, 0.5, 0.05, 0.01, draw)
//   .addRange("peak", 10, 250, 75, 1)
//   .addRange("valley", -250, -10, -75, -1);



function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height, WEBGL);
  sketchCanvas.parent("backgroundCanvas");
  // w = width;
  // h = height;

  cols = w / scl;
  rows = h / scl;

  // make a 2d array
  terrain = [];
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
  }
}

function draw() {
  background(255);

  flying -= flyingRate;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, valley, peak);
      // terrain[x][y] = map(noise(xoff, yoff), 0, 1, panel.getValue("valley"), panel.getValue("peak"));
      xoff += noiseInc;
    }
    yoff += noiseInc;
  }

  rotateX(PI / 4);
  translate(-w / 2, -h / 2);
  strokeWeight(1);
  stroke('rgba(0,0,0,1)');

  // loop to draw individual quad shapes
  for (var y = 0; y < rows - 1; y++) {
    for (var x = 0; x < cols - 1; x++) {
      beginShape();
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      vertex((x + 1) * scl, (y + 1) * scl, terrain[x + 1][y + 1]);
      vertex((x + 1) * scl, y * scl, terrain[x + 1][y]);
      endShape();
    }
  }

  // push();
  // for (var y = 0; y < rows - 1; y++) {
  //   for (var x = 0; x < cols - 1; x++) {
  //     quad(
  //       x * scl, y * scl, terrain[x][y],
  //       (x + 1) * scl, (y + 1) * scl, terrain[x + 1][y + 1],
  //       (x + 1) * scl, y * scl, terrain[x + 1][y],
  //       (x + 1) * scl, y * scl, terrain[x + 1][y]);
  //   }
  // }
  // pop();

}
