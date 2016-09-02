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

var panelParent = document.getElementById('main');
console.log(panelParent);

var panel = QuickSettings.create(600, 100, 'Flowfield Controls')
    .addRange("Noise Seed", 0, 10000, 5000, 100, draw)
    .addRange('X Angle', 0, 1, 0, 0.1, draw)
    .addRange('Y Angle', 0, 1, 0, 0.1, draw);



function setup() {
    var canvasDiv = document.getElementById('backgroundCanvas');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(width, height);
    //var sketchCanvas = createCanvas(windowWidth,450);
    sketchCanvas.parent("backgroundCanvas");

    flowfield = new FlowField(15);
    flowfield.init(seed, xoffStart, yoffStart);

};

function draw() {
    clear();
    seed = panel.getRangeValue('Noise Seed');
    xoffStart = panel.getRangeValue('X Angle');
    yoffStart = panel.getRangeValue('Y Angle');
    flowfield.init(seed, xoffStart, yoffStart);

    if (debug) flowfield.display();
};

function keyPressed() {
    if (key == ' ') {
        debug = !debug;
    }
};

// function mousePressed() {
//     clear();
//
// };
