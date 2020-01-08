ThreeContainer.prototype.zoom = function(level) {
  const container = this;
  container.camera.position.z = level;
}
