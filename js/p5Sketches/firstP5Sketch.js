var canvasDiv = document.getElementById("myCanvas");
var divWidth = document.getElementById("myCanvas").clientWidth;

function setup() {
  var sketchCanvas = createCanvas(divWidth,450);
  sketchCanvas.parent("myCanvas");
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

  function windowResized() {
  resizeCanvas(divWidth,450);
}

}
