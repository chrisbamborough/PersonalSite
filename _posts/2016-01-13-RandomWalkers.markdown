---
layout: post
title:  "Random Walkers"
date:   2016-01-13 12:00:00
categories: blog
tags: Creative Code
image:
---
<canvas id="myCanvas" width="845px" height="450px"
style="border:1px solid #000000;">
</canvas>

<script>
// put code in an overall function
window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;
    var step = 5;

    // walker object
    var Walker = function() {
        this.x = width / 2;
        this.y = height / 2;

        Walker.prototype.display = function() {
            ctx.rect(this.x,this.y,1,1);
            ctx.stroke();
            ctx.fill();
        }

        Walker.prototype.walk = function () {
            var choice = Math.random();

            if (choice >= 0 && choice < 0.25) {
                this.x = this.x + step;
            } else if (choice >= 0.25 && choice < 0.5) {
                this.x = this.x - step;
            } else if (choice >= 0.5 && choice < 0.75) {
                this.y += step;
            } else {
                this.y -= step;
            }
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


This is a little bit backward but I started with section 1 in Nature Of Code as I didn't know how to create objects in Java Script but this is the stage where this happened.

As before the html file is set up toreference a javascript file and creates a canvas.
~~~ html
    <html>
    <head>
        <title>Random Walker</title>
        <script type="text/javascript" src="NOC_0_1_RandomWalker.js"></script>
    </head>
    <body>
        <canvas id="canvas"></canvas>
    </body>
    </html>
~~~

For the javascript the function is set up to load as the window is opened and then the variables initialised.

~~~ Javascript
    window.onload = function () {
        "use strict";
        // initialise canvas
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width = window.innerWidth;
        var height = canvas.height = window.innerHeight;
        var step = 1;
        ~~~

 The next step is to create a walker object that has information on how to behave, in this case how to display, and then how to walk. The most significant difference here between processing and javascript is that js does not have a random function that you can input ranges, it only outputs a float between 0-1. As a result the walk function needs a series of conditionals to test wether than random number generated fell between a certain range.  

~~~ Javascript
     // walker object
        var Walker = function() {
            this.x = width / 2;
            this.y = height / 2;

            Walker.prototype.display = function() {
                ctx.rect(this.x,this.y,1,1);
                ctx.stroke();
                ctx.fill();
            }

            Walker.prototype.walk = function () {
                var choice = Math.random();

                if (choice >= 0 && choice < 0.25) {
                    this.x = this.x + step;
                } else if (choice >= 0.25 && choice < 0.5) {
                    this.x = this.x - step;
                } else if (choice >= 0.5 && choice < 0.75) {
                    this.y += step;
                } else {
                    this.y -= step;
                }
            }
        }  
        ~~~

Finally to create a walker the object must be instantiated, a draw function created to call the objects functions, and a call to run the draw function.

~~~ Javascript
    // initialise a walker object
        var w = new Walker();

        // run draw function
        setInterval(draw, 10);

        function draw() {
            w.walk();
            w.display();
        }


    };
    ~~~
