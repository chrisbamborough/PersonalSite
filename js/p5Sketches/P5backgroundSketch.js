function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  console.log(canvasDiv);
  console.log(width);
  console.log(height);
  var sketchCanvas = createCanvas(width,height);
  //var sketchCanvas = createCanvas(windowWidth,450);
  sketchCanvas.parent("backgroundCanvas");

  console.log(sketchCanvas)
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
  resizeCanvas(width,height);
}
