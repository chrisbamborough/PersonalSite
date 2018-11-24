// P5 Sketch boilerplate

function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height, WEBGL);
  sketchCanvas.parent("backgroundCanvas");

}

function draw() {


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
