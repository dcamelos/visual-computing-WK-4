
let myShader;
let fogNear = 0.700;
let fogFar = 0.900;
let fogColor = [0.8, 0.9, 1, 1];
let fogSliderNear, fogSliderFar;
let textureImage;
let robotoFont;

function preload() {
  textureImage = loadImage("img/f-texture.png");
  robotoFont = loadFont('font/Roboto-Italic-VariableFont_wdth,wght.ttf');
  myShader  = loadShader('fogShader.vert', 'fogShader.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  textFont(robotoFont);
  noStroke();


  fogSliderNear = createSlider(0,1, fogNear, 0.001);
  fogSliderNear.position(345, 10);
  fogSliderNear.style('width', '200px');

  fogSliderFar = createSlider(0, 1, fogFar, 0.001);
  fogSliderFar.position(345, 40);
  fogSliderFar.style('width', '200px');

}

function draw() {
  background(204, 229, 255);
  fogNear = fogSliderNear.value();
  fogFar = fogSliderFar.value();
  shader(myShader);

  let n = 40;
  for (let i = 0; i <= n; ++i) {
    push()
    camera(0.2, 0, 1);
    translate(
      map(i, 0, n-1, -180, 750),
      0,
      i * -100
    );

    rotateWithFrameCount();
    myShader.setUniform('u_texture', textureImage);
    myShader.setUniform('u_fogColor', fogColor);
    myShader.setUniform('u_fogNear', fogNear);
    myShader.setUniform('u_fogFar', fogFar);
    box(50);
    pop();
  }

  resetShader();
  push();
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  text('fogNear: ',0, -285);
  text( fogNear, 270, -285);
  text('fogFar: ',0, -250);
  text( fogFar, 270, -250);
  pop()

}

function rotateWithFrameCount() {
  let t = millis() * 0.001;
  rotateX(0.4 * t);
  rotateY(-0.7 * t);
}
