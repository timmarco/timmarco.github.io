/* jshint esversion:6 */
PitchSidePlot.prototype.defineLayout = function() {
  const plot = this;
  let layout = {};

  layout.minX = 365;
  layout.maxX = 10;
  layout.effectiveWidth = 355;
  layout.effectiveHeight = 47.33;
  layout.minY = 47.33;
  layout.maxY = 0;

  return layout;
};
