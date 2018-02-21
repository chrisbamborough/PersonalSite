

function setup() {
  var canvasDiv = document.getElementById('postCanvas');
  var width = canvasDiv.clientWidth;
  var height = canvasDiv.clientHeight;

  var sketchCanvas = createCanvas(width,450);
  //var sketchCanvas = createCanvas(windowWidth,450);
  sketchCanvas.parent('postCanvas');
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 40, 40);

  if (keyIsPressed == true){
    clear();
  }
}

function windowResized() {
  resizeCanvas(width,450);
  console.log("I'm being called");
}
