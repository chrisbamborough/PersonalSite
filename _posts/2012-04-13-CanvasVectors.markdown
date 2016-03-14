---
layout: post
title:  "Canvas Vectors"
date:   2012-04-13 12:00:00
categories: blog
tags: Creative Code
image:
---
The Nature of code introduces the use of vectors through a bouncing ball animation created via Processing’s inbuilt PVector library. The first snag with Javascript is that this PVector library is not accessible (well it is through [processing.js](http://processingjs.org/)) so I have had to write my own.

The exercise is to rewrite the previous example but using vectors to update the position instead of x/y coordinates. So the html part is the same as before but this time we reference another javascript file "vectorMathsLib.js". My library was based on the excellent resource [Coding Math](http://codingmath.com/) by [Keith Peters](http://www.patreon.com/codingmath)

~~~ html
    <html>
    <head>
        <title></title>
        <script type="text/javascript" src="vectorMathsLib.js"></script>
        <script type="text/javascript" src="NOC_1_2_BouncingBall_Vectors.js"></script>
    </head>
    <body>
        <canvas id = "myCanvas"></canvas>
    </body>  
    </html>
~~~

In NOC_1_2_BouncingBall_Vectors.js we use the same structure but when declaring variables two vectors must be initialised, location and velocity. This time instead of the X and Y position being updated by adding xspeed and yspeed, the vector of the ball (location) gets added to the vector of direction (velocity). The edge test is then able to just reverse the vector in the x or y direction to make the ball bounce.

~~~ Javascript
    // put code in an overall function
    window.onload = function () {
        var canvas = document.getElementById('myCanvas'),
            context = canvas.getContext('2d'),
            width = canvas.width = window.innerWidth,
            height = canvas.height = window.innerHeight,
            x = 10,
            y = 10,    
            location = vector.create(10, 10),
            velocity = vector.create(2.5, 5);

        setInterval(draw, 10);

        function draw() {
            // redraw background every frame
            context.clearRect(0, 0, width, height);

            // add current speed to the location
            location.addTo(velocity);

            // draw a circle at the location
            context.beginPath();
            context.fillStyle = "#000ff";
            context.arc(location.getX(), location.getY(), 20, 0, Math.PI * 2, true);
            context.fill();

            // Edge Testing
            if (location.getX() > width || location.getX() < 0) {
                velocity._x *= -1;
            }
            if (location.getY() > height || location.getY() < 0) {
                velocity._y *= -1;
            }

        }

    };
~~~

Making the vector library is the tricky thing, in Javascript they appear to be just like functions (I come from a Python background) and by simply creating functions within an overall variable the vector math can be calculated. The biggest difference is that to make it behave like an object its attributes must be this. rather than var.

~~~ Javascript
    var vector = {
    	// x and y variables of the vector
        _x: 1,
        _y: 0,

		// initialise and return the vector object
        create: function(x, y) {
            var obj = Object.create(this);
            obj.setX(x);
            obj.setY(y);
            return obj;
        },

        setX: function(value) {
			this._x = value;
		},

        getX: function() {
            return this._x;
        },

        setY: function(value) {
            this._y = value;
        },

        getY: function() {
            return this._y;
        },

        addTo: function(v2) {
          	this._x += v2.getX();
          	this._y += v2.getY();
		},
    };
    ~~~

From this a ball bounces around the screen as before, but it is much smarter. Unlike me who hasn't got an example to show yet.
