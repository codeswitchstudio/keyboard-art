//Coding Train Coding Challenge #86: Cube Wave by Bees and Bombs
//https://youtu.be/H81Tdrmz2LA



//Life's Missing Pushbuttons 

let angle = 0;
let w =180;
let magicAngle;
let maxD;
// let vid;

function setup() {
  
  let cnv = createCanvas(800, 800, WEBGL);
  cnv.position(windowWidth/2 - 400, -90);
  magicAngle = atan(1/sqrt(2));
  maxD = dist(0, 0, 200, 200);
  
  pg = createGraphics(200, 200);
  pg.textSize(75);
  describe('box with a texture from an image created by createGraphics()');
  
  // vid = createVideo(['video.mp4']);
  // vid.elt.muted = true;
  // vid.loop();
  // vid.hide();
} 

function draw() {
  // background("#01D4EA");
  // stroke("#00BCD4");
  stroke(100)
  background("#FBFBFB");
  strokeWeight(4);
  // fill(50, 60, 250, 30);

  // nor#A6DFDFrial();
  ortho(-800, 800, -800, 800, 0, 2000);
  // directionalLight(255, 0, 0, 0, -1, 0);
  // translate (width/2, height/2);
  translate (50, 50, -50)
  rotateX(-QUARTER_PI);
  rotateY(magicAngle);


  // rectMode(CENTER);
  
  // rotateX(angle * 0.25);
 
  
  // let offset = 0;

  for(let z = 0; z < height; z += w) {
    for(let x = 0; x < width; x += w) {
  
    push();
    let d = dist(x, z, width/2, height/2 )
    // offset += 
    let offset = map(d, 0, maxD, -PI, PI)
    let a = angle + offset;
    let h = floor(map(sin(a), -1, 1, 100, 400));
    
    fill("#CCFAFA")
    
    translate (x-width/2, 0, z-height/2);
    // ambientMaterial(255);
    // normalMaterial();
    // texture(vid);
      
      
      
    pg.background(0);
    pg.fill(255)
      pg.text('undo', 15, 110);
    //pass image as texture
    texture(pg);
    // rotateX(0.5);
    // noStroke();
      
    box(w-2, h, w-2);
    //rect(x, y, width, height, smoothness);
    // rect (x-width/2 + w/2, 0, w-2, h);
    pop();
  }
  
  }
  
  
    let h = 50; 
  angle -= 0.07
              
 
  
  
  
  
  
}