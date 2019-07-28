/* jshint esversion:6 */
function BrushBox(options) {
  const box = this;
  init(options);
  return box;



  function init(options) {
    box.where = options.where;
    box.worldCoordinates = options.worldCoordinates;

    box.size = box.defineSize(options);
    box.styles = box.defineStyles(options);
    box.coordinates = box.defineCoordinates(options);
    box.callbacks = box.defineCallbacks(options);
    box.dragLock = false;
    box.drag = box.defineDrag(options);
    box.sizeFormatter = box.defineSizeFormatter(options);
    box.worldCoordinatesFormatter = box.defineWorldCoordinatesFormatter(options);

    box.group = box.addGroup();
    box.layers = box.addLayers();
    box.rect = box.addRect();
    box.corners = box.addCorners();
    box.edgeIndicators = box.addEdgeIndicators();
    box.sizeIndicators = box.addSizeIndicators();
    box.groundIndicators = box.addGroundIndicators();

  }
}
