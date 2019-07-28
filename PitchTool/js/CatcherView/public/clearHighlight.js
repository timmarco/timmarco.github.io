/* jshint esversion:6 */
CatcherView.prototype.clearHighlight = function() {
  const view = this;

  view.layers.highlightCircles
    .selectAll("*")
    .remove();

  return view;
};
