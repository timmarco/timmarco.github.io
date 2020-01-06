Timeline.prototype.defineLayout = function() {
  const timeline = this;
  const layout = {};

  layout.transitionTime = 750;

  layout.size = {};
  layout.size.width = window.innerWidth;
  layout.size.height = window.innerHeight;

  layout.margins = {};
  layout.margins.left = layout.size.width * 0.25;
  layout.margins.right = layout.size.width * 0.125;
  layout.margins.top = 25;
  layout.margins.bottom = 25;

  layout.effectiveWidth = layout.size.width - layout.margins.left - layout.margins.right;
  layout.effectiveHeight = layout.size.height - layout.margins.bottom - layout.margins.top;

  layout.translateAxisGroup = "translate("+layout.margins.left+",50)";


  return layout;
}
