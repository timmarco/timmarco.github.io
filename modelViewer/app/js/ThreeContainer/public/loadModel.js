ThreeContainer.prototype.loadModel = function(modelPath) {
  const container = this;

  let promise = new Promise((resolve,reject) => {
    container.loader.load(
      modelPath,
      function(gltf) {
        resolve(gltf);
      },
      function(xhr) {

      },
      function(error) {
        scene.logger.error("ERROR LOADING MODEL", error);
      }
    )
  });

  return promise;
}
