ThreeContainer.prototype.addScene = function() {
  const container = this;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  return scene;
}
