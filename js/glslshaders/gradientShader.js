// Author:
// Title:


function setup() {
  var canvasDiv = document.getElementById('backgroundCanvas');
  var width = canvasDiv.offsetWidth;
  var height = canvasDiv.offsetHeight;
  // var sketchCanvas = createCanvas(width, height, WEBGL);
  // sketchCanvas.parent("backgroundCanvas");

  var canvas = document.createElement("canvas");
  var sandbox = new GlslCanvas(canvasDiv);
}


//Load only the Fragment Shader
// var string_frag_code = "main(){\ngl_FragColor = vec4(1.0);\n}\n";
// sandbox.load(string_frag_code);




// #ifdef GL_ES
// precision mediump float;
// #endif
//
// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;
//
// void main() {
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;
//     st.x *= u_resolution.x/u_resolution.y;
//
//     vec3 color = vec3(0.);
//     color = vec3(st.x,st.y,abs(sin(u_time)));
//
//     gl_FragColor = vec4(color,1.0);
// }
