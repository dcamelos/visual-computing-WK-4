let myShader;
let fogSlider; // Slider para controlar la cantidad de niebla
let Fs; // Textura para el shader
let fogColor = [0.8, 0.9, 1, 1]; // Color de niebla (RGBA)
let fogAmount = 0.5; // Cantidad inicial de niebla (0.0 a 1.0)

function preload() {
  // Carga una imagen para usar como textura
  Fs = loadImage("img/f-texture.png");
  robotoFont = loadFont('font/Roboto-Italic-VariableFont_wdth,wght.ttf');
  myShader  = loadShader('fogShader.vert', 'fogShader.frag');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  textFont(robotoFont);
  noStroke();
  // Crear el objeto p5.Shader
  //myShader = createShader(vertSrc, fragSrc);

  // Crear el slider para controlar u_fogAmount
  fogSlider = createSlider(0, 1, fogAmount, 0.01); // Mínimo 0, máximo 1, paso de 0.01
  fogSlider.position(345, 10); // Posición del slider
  fogSlider.style('width', '200px'); // Ancho del slider
}

function draw() {
  background(204, 229, 255);

  // Leer el valor del slider para ajustar fogAmount
  fogAmount = fogSlider.value();

  // Usa el shader personalizado
  shader(myShader);

  // Configurar las variables uniformes
  myShader.setUniform('u_texture', Fs); // Textura
  myShader.setUniform('u_fogColor', fogColor); // Color de niebla
  myShader.setUniform('u_fogAmount', fogAmount); // Cantidad de niebla

  push();
  fill(200);
  translate(0, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(width / 4);
  pop();

  push();
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(0);
  text('fogAmount: ',0, -285);
  text( fogAmount, 270, -285);
  pop()

}
