/* jshint esversion:6 */
PitchSmallPlot.prototype.defineLayout = function() {
  const plot = this;
  let layout = {};
  layout.catcherViewCoordinates = {"x":10,"y":10};
  layout.catcherViewSize = {"height":130,"width":130};
  layout.catcherViewBounds = {"xMin":0,"xMax":130,"yMin":130,"yMax":0};
  layout.dividingLine = {"x1":150,"x2":150,"y1":10,"y2":140};
  layout.sideViewCoordinates = {"x":160,"y":10};
  layout.sideViewSize = {"width":180,"height":65};
  layout.sideViewBounds = {"width":180,"height":130};
  return layout;
};
