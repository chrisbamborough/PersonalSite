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
