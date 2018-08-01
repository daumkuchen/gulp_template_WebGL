import * as THREE from 'three';

import vert from './../_shader/mesh.vert';
import frag from './../_shader/mesh.frag';

export default class Plane {
  constructor() {
    this.uniforms = {
      resolution: {
        type: 'v2',
        value: new THREE.Vector2()
      },
      mouse: {
        type: 'v2',
        value: new THREE.Vector2()
      },
      time: {
        type: 'f',
        value: 1.0
      }
    };
    this.geometry = null;
    this.material = null;
    this.mesh = null;
  }
  setup() {
    this.geometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
      -1., -1.,  1.,
       1., -1.,  1.,
       1.,  1.,  1.,
       1.,  1.,  1.,
      -1.,  1.,  1.,
      -1., -1.,  1.
    ]);
    this.geometry.addAttribute('position',
      new THREE.BufferAttribute(positions, 3)
    );
    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vert,
      fragmentShader: frag,
      side: THREE.DoubleSide
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
}
