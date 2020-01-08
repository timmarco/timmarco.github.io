ThreeContainer.prototype.addEmpty = function() {
  const container = this;
  const empty = new THREE.Object3D();

  container.scene
    .add(empty);

  return empty;
}
