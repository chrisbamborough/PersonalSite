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
var res = 20;
var particles = [];
var scl = 10;
var vectorLine = [];

var panelParent = document.getElementById('backgroundCanvas');

var panel = QuickSettings.create(panelParent.offsetWidth*0.75, panelParent.offsetHeight*0.25, 'Flowfield Controls')
    .addRange("Noise Seed", 0, 10000, 5000, 100, seedField)
    .addRange('X Angle', 0, 1, 0, 0.1, seedField)
    .addRange('Y Angle', 0, 1, 0, 0.1, seedField);
//.addRange('Field Resolution', 10, 100, 30, 1, createField);


function setup() {
    var canvasDiv = document.getElementById('backgroundCanvas');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(width, height);
    //var sketchCanvas = createCanvas(windowWidth,450);
    sketchCanvas.parent("backgroundCanvas");

    // set colour mode (HSB, 360, 100, 100, 1)
    colorMode(HSB);
    createField();
    seedField();

    // set up agents
    for (var i = 0; i < 1000; i++) {
        particles[i] = new Particle();
    }

};

function createField() {
    //res = panel.getRangeValue('Field Resolution');
    flowfield = new FlowField(res);
}

function seedField() {
    //clear();
    seed = panel.getValue('Noise Seed');
    xoffStart = panel.getValue('X Angle');
    yoffStart = panel.getValue('Y Angle');
    flowfield.init(seed, xoffStart, yoffStart);
}

function draw() {

    // if (debug) {
    //     vectorLine[0] = flowfield.display();
    // }

    // controld for the particles
    for (var i = 0; i < particles.length; i++) {
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();
    }

};

// function keyPressed() {
//     if (key == ' ') {
//         debug = !debug;
//     }
// };
