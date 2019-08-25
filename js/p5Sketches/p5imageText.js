  PImage img; //source image'
  int cellsize = 5; //dimension of each cell in our grid
  int cols, rows; // Number of columns and rows in our system
  String chars = &quot;ITSNOTEASYBEING&quot;;
  PFont f;
  void setup () {
  	size (800,1058);
  	// Set up columns and rows
  	//cols = width/photoScale;
  	//rows = height/photoScale;
  	img = loadImage (&quot;kermit-the-frog.jpg&quot;);
  	smooth ();
  	// Load the font
  	f = createFont(&quot;Courier-Bold&quot;,10);
  }

  void draw () {
    //draw background each time
    background (0);
    // Call loadPixels before we deal with pixels
    loadPixels ();
    // Use a variable to count through chars in String
    int charcount = 0;
    // Loop through all pixels, skip every 10 pixels along the y-axis
    for (int y = 0; y &amp;lt; img.height ; y += 10) {
    	// skip every 5 pixels along the x-axis
    for (int x = 0; x &amp;lt; img.width+5 ; x += 5) { 
    	// Calculate the 1D location from a 2D grid 
      int loc = x + y*img.width; 
      // write text textFont(f); 
      // Color according to the image fill 
      (img.pixels [loc]); 
      // Map the brightness of a pixel to the size of a font 
      float b = brightness(img.pixels[loc]); 
      float fontSize = 20 * (b / 255); 
      textSize(fontSize); 
      // One character from the source text is displayed colored accordingly to the pixel location. 
      // A counter variable â charcountâ is used to walk through the source String one character at a time. 
      text(chars.charAt(charcount),x,y); 
      x += textWidth (chars.charAt(charcount)); 
      // Go on to the next character 
      charcount = (charcount + 1) % chars.length(); 
      } 
  } 
  save(&quot;Kermit.jpg&quot;); 
  } 