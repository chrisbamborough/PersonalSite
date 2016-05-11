---
layout: post
title:  "P5.js background interactivity"
date:   2016-05-10 19:45:00
categories: blog
tags: Creative Code, p5.js
image:
---
<script src="/js/p5Sketches/P5backgroundSketch.js" type="text/javascript"></script>

The next stage is to create p5 sketches in the background so it isn't confined to a canvas window within the post. In this post the canvas has simply been assigned to an overall html Div called backgroundCanvas which wraps all the content. As previously the sketch canvas is given the div's attributes as height and width.

The p5.js website integrates a background animation through an iFrame positioned to float behind, I'm not sure if this is a better solution or not. Any comments tweet me on [@chrisbamborough](www.twitter.com/chrisbamborough)

~~~ javascript

function setup() {
  var canvasDiv = document.getElementById("backgroundCanvas");
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(divWidth,divHeight);
  sketchCanvas.parent("backgroundCanvas");
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

~~~
