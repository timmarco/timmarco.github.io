/* jshint esversion:6 */
function BrushBoxCorner(options) {
  const corner = this;
  init(options);
  return corner;

  function init(options) {
    corner.parent = options.parent;
    corner.coordinates = options.coordinates;

    corner.dragLock = false;
    
    corner.drag = corner.defineDrag();
    corner.callbacks = corner.defineCallbacks(options);

    corner.group = corner.addGroup();
    corner.hotspot = corner.addHotspot();
    corner.circle = corner.addCircle();

  }
};
