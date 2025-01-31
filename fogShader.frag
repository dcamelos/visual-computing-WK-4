precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D u_texture;
uniform vec4 u_fogColor;
uniform float u_fogNear;
uniform float u_fogFar;

void main() {
  vec4 color = texture2D(u_texture, vTexCoord);
  float fogAmount = smoothstep(u_fogNear, u_fogFar, gl_FragCoord.z );
  gl_FragColor = mix(color, u_fogColor, fogAmount);
}