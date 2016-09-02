// Based on Daniel Shiffman's Kadenze Nature Of Code Examples
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Flow Field Following
function FlowField(r) {
    this.resolution = r;
    this.cols = width / this.resolution;
    this.rows = height / this.resolution;

    this.make2Darray = function(n) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array[i] = [];
        }
        return array
    };

    this.field = this.make2Darray(this.cols);

    this.init = function(seed, xoffStart, yoffStart) {
        noiseSeed(Math.floor(seed));
        var xoff = xoffStart;
        for (var i = 0; i < this.cols; i++) {
            var yoff = yoffStart;
            for (var j = 0; j < this.rows; j++) {
                var theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
                this.field[i][j] = createVector(cos(theta), sin(theta));
                yoff += 0.1;
            }
            xoff += 0.1;
        }
    };

    //this.init(10000,0,0);

    this.display = function() {
        for (var i = 0; i < this.cols; i++) {
            for (var j = 0; j < this.rows; j++) {
                drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 1);
            }
        }
    };

    var drawVector = function(v, x, y, scale) {
        push();
        var arrowsize = 4;
        translate(x, y);
        stroke(200, 200);
        rotate(v.heading());
        var len = v.mag() * scale;
        line(0, 0, len, 0);
        pop();
    };
};
