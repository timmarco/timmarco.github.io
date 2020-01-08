ModelViewer.prototype.updateModel = function(model) {
  const viewer = this;

  viewer.description
    .updateModel(model);

  viewer.threeContainer
    .displayModel(model);

  viewer.modelThumbnails.forEach((thumbnail) => {
    if(thumbnail.gltfPath == viewer.currentModelPath) {
      thumbnail
        .activate();
    } else {
      thumbnail
        .deactivate();
    }
  })

  return viewer;
}
