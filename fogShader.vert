attribute vec4 aPosition;
attribute vec2 aTexCoord;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

varying vec2 vTexCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aPosition;
  vTexCoord = aTexCoord;
}