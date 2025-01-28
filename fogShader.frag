precision mediump float;
varying vec2 vTexCoord;
uniform sampler2D u_texture;
uniform vec4 u_fogColor;
uniform float u_fogAmount;

void main() {
  vec4 color = texture2D(u_texture, vTexCoord);
  gl_FragColor = mix(color, u_fogColor, u_fogAmount);
}