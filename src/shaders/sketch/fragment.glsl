uniform vec2 uResolution;
uniform float uTime;

varying vec2 vUv;




void main () {

// Move uv to center and normalize
  vec2 st = gl_FragCoord.xy / uResolution.xy * 2.0 - 1.0;

  // Keep aspect ration
  st.x *= uResolution.x/ uResolution.y;


  gl_FragColor = vec4(vec3(st, 1.0), 1.);
}