ThreeContainer.prototype.defineLayout = function() {
  const viewer = this;
  const layout = {};

  const containerSize = d3.select("#threeContainer").node().getBoundingClientRect();
  layout.size = {};
  layout.size.width = containerSize.width;
  layout.size.height = containerSize.height;

  layout.aspectRatio = layout.size.width / layout.size.height;


  return layout;
}
