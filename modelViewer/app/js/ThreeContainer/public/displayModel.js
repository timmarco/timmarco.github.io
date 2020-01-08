ThreeContainer.prototype.displayModel = function(model) {
  const container = this;

  container.orbitControls.reset();

  container.camera.position.x = model.cameraPosition.x;
  container.camera.position.y = model.cameraPosition.y;
  container.camera.position.z = model.cameraPosition.z;

  container.camera.rotation.x = model.cameraRotation.x;
  container.camera.rotation.y = model.cameraRotation.y;
  container.camera.rotation.z = model.cameraRotation.z;

  container.camera.frustumCalled = true;

  container
    .loadModel(model.gltfPath)
    .then((model) => {
      container.empty.children = [];
      container.currentObject = model.scene;
      container.empty.add(container.currentObject);
      container.empty.frustumCalled = true;
      container.orbitControls.update();
      container.lights.key.target = container.empty;
      container.lights.fill.target = container.empty;
    });

}
