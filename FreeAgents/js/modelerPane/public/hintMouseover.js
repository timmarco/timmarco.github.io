/* jshint esversion:6 */
ModelerPane.prototype.hintMouseover = function() {
  return () => {
    const pane = this;
    if(!pane.hasDragged) {
      pane.tooltip
        .update("Click and drag to change value.")
        .show()
        .move();      
    }
    return pane;
  };
};
