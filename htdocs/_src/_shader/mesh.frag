#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main(void) {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  vec3 color = 0.5 + 0.5 * cos(time + p.xyx + vec3(0, 2, 4));
  gl_FragColor = vec4(color, 1.0);
}
