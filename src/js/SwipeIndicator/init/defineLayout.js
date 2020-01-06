SwipeIndicator.prototype.defineLayout = function() {
  const indicator = this;
  const layout = {};

  layout.size = {};
  layout.size.width = window.innerWidth;
  layout.size.height = window.innerHeight * 0.1;

  layout.circleRadius = layout.size.height * 0.05;

  layout.scaleMin = layout.size.width * 0.125;
  layout.scaleMax = layout.size.width * 0.875;

  return layout;
}
