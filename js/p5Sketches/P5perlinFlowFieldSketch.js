// Based on Daniel Shiffman's Kadenze Nature Of Code Examples
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Flow Field Following

var debug = true;
var flowfield;
var message = 'press H to show / hide GUI';
var seed = 5000;
var xoffStart = 0;
var yoffStart = 0;

var panelParent = document.getElementById('backgroundCanvas');
console.log(panelParent);

var panel = QuickSettings.create(panelParent.offsetWidth*0.75, panelParent.offsetHeight*0.25, 'Flowfield Controls')
  .addRange("Noise Seed", 0, 10000, 5000, 100, draw)
  .addRange('X Angle', 0, 1, 0, 0.1, draw)
  .addRange('Y Angle', 0, 1, 0, 0.1, draw);

function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(width, height);
  sketchCanvas.parent("backgroundCanvas");

  flowfield = new FlowField(15);
  flowfield.init(seed, xoffStart, yoffStart);

};

function draw() {
  background(255);
  clear();
  seed = panel.getValue('Noise Seed');
  xoffStart = panel.getValue('X Angle');
  yoffStart = panel.getValue('Y Angle');
  flowfield.init(seed, xoffStart, yoffStart);

  if (debug) flowfield.display();
};

function keyPressed() {
  if (key == ' ') {
    debug = !debug;
  }
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  clear();

};
