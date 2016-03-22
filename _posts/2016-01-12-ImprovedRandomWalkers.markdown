---
layout: post
title:  "Improved Random Walkers"
date:   2016-01-12 12:00:00
categories: blog
tags: Creative Code
image:
---
<style>  
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>

<canvas id="myCanvas" width="845px" height="450px"
style="border:1px solid #000000;">
</canvas>

<script>
// put code in an overall function
window.onload = function () {
    "use strict";
    var canvas = document.getElementById('myCanvas');    
  	canvas.style.width ='100%';
  	canvas.style.height='100%';
  	canvas.width  = canvas.offsetWidth;
  	canvas.height = canvas.offsetHeight;    
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var step = 5;

    // walker object
    var Walker = function () {
        this.x = width / 2;
        this.y = height / 2;

        Walker.prototype.display = function() {
            ctx.rect(this.x,this.y,2,2);
            ctx.stroke();
            ctx.fill();
        }

        Walker.prototype.walk = function () {
        	var choice = Math.random();

            var stepx = Math.random(); // value 0-1
            var stepy = Math.random();

            if (stepx >= 0 && stepx < 0.33) {
                stepx = -1;
            } else if (stepx >= 0.33 && stepx < 0.66) {
                stepx = 0;
            } else {
                stepx = 1;
            }

            if (stepy >= 0 && stepy < 0.33) {
                stepy = -1;
            } else if (stepy >= 0.33 && stepy < 0.66) {
                stepy = 0;
            } else {
                stepy = 1;
            }

            this.x += stepx*step
            this.y += stepy*step
        }
        }

        // initialise a walker object
        var w = new Walker();

        // run draw function
        setInterval(draw, 10);

        function draw() {
            w.walk();
            w.display();
        }
    };
</script>


The point of improvement in the ImprovedVectorWalker is the conditional that "controls" the randomness. In the previous example the test gave the random walker a choice of 4 directions (2 for x and 2 for y), this time it has 9 choices (3 for x and 3 for y). To do this a separate random number needs to be generated for both x and y, then each is tested to see if it falls within a range between 0 and 1 (remember java script random gives a random number between 0-1).


      // walker object
      var Walker = function () {
          this.x = width / 2;
          this.y = height / 2;

          Walker.prototype.display = function () {
              ctx.rect(this.x, this.y, 1, 1);
              ctx.stroke();
              ctx.fill();
          }

          Walker.prototype.walk = function () {
              // improved movement
              var stepx = Math.random(); // value 0-1
              var stepy = Math.random();

              if (stepx >= 0 && stepx < 0.33) {
                  stepx = -1;
              } else if (stepx >= 0.33 && stepx < 0.66) {
                  stepx = 0;
              } else {
                  stepx = 1;
              }

              if (stepy >= 0 && stepy < 0.33) {
                  stepy = -1;
              } else if (stepy >= 0.33 && stepy < 0.66) {
                  stepy = 0;
              } else {
                  stepy = 1;
              }

              this.x += stepx;
              this.y += stepy;

          }
