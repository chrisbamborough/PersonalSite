function setup() {
    // var canvasDiv = document.getElementById('backgroundCanvas');
    // var width = canvasDiv.offsetWidth;
    // var height = canvasDiv.offsetHeight;
    // var sketchCanvas = createCanvas(width, height);
    // //var sketchCanvas = createCanvas(windowWidth,450);
    // sketchCanvas.parent("backgroundCanvas");

    text = createP("Press the button to try out different colour combinations")
    text.parent('main');

    button = createButton("Click Me!");
    button.parent('main');
    button.style('color', '#0B143B');
    button.mousePressed(changeColour);

    css_body = select('body');
    css_header = select('header');
    css_paragraph = select('p');
    css_h2 = select('h2');
    css_ahref = select('a');
    css_minipost = select('post');
    css_footer = select('footer');
    console.log(css_minipost);
    // strong, h1

}


function changeColour() {
    // this is where the elements will be changedp5.Vector
    // 1 - background - $primary-color - see if you can manipulate scss values
    // body, header,
    backgroundColour = [random(255), random(255), random(255)];
    css_body.style('background', color(backgroundColour[0], backgroundColour[1], backgroundColour[2]));
    css_header.style('background', color(backgroundColour[0], backgroundColour[1], backgroundColour[2]));
    // 2 - Text body color / strong,b / h1, h2, h3, h4, h5, h6 / h-logo / button

    textColour = [numberGenerator(backgroundColour[0]),numberGenerator(backgroundColour[1]),numberGenerator(backgroundColour[2])];
    console.log("text " + textColour);
    console.log("background " + backgroundColour);
    // Change body text and logos
    css_body.style('color', color(textColour[0], textColour[1], textColour[2]));
    // Change main logo
    css_h2.style('color', color(textColour[0], textColour[1], textColour[2]));
    // Change button colour
    button.style('color', color(textColour[0], textColour[1], textColour[2]));
    // Change the menu button colour
    css_ahref.style('transition', color(textColour[0], textColour[1], textColour[2]));

    //css_header.style('color', color(textColour[0], textColour[1], textColour[2]));
    //css_footer.style('color', color(textColour[0], textColour[1], textColour[2]));
    // css_paragraph.style('color', color(textColour[0], textColour[1], textColour[2]));
    // //css_aref.style('color', color(textColour[0], textColour[1], textColour[2]));
    //css_minipost.style('border', color(textColour[0], textColour[1], textColour[2]));


}

function numberGenerator(colourValue){
  //console.log("I'm being called");
  if (colourValue > 125 ){
    //console.log("I'm more than 125");
    //console.log("Original value " + colourValue);
    colourValue = 125 - (colourValue -125);
    //console.log("New value " + colourValue);
    return colourValue;
  } else if (colourValue < 125){
    //console.log("I'm less than 125");
    colourValue = 125 + (125 - colourValue);
    return colourValue;
  } else {
    //console.log("I'm 125!");
    return colourValue;
  }
}
