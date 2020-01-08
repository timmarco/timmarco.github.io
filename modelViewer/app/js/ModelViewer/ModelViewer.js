function ModelViewer(options) {
  const viewer = this;
  init(options);
  return viewer;

  function init(options) {
    viewer.hasTransitionedIn = false;
    viewer.hasDragged = false;
    viewer.modelThumbnails = viewer.addModelThumbnails();
    viewer.threeContainer = viewer.addThreeContainer();
    viewer.description = viewer.addDescription();
    viewer.dragCallout = viewer.addDragCallout();
    viewer.currentModelPath =  "";
  }
}
