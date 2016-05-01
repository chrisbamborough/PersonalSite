function setup() {
  var myCanvas = createCanvas(845,450);
  myCanvas.parent("myCanvas");
}

function draw() {
  if (mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);

  if (keyIsPressed == true){
    clear();
  }

}
