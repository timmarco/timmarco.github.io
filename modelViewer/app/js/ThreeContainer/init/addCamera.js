ThreeContainer.prototype.addCamera = function() {
  const container = this;
  const camera = new THREE.PerspectiveCamera(
    75,
    container.layout.aspectRatio,
    container.constants.NEAR,
    container.constants.FAR
  );

  camera.position.z = 4;
  return camera;
}
