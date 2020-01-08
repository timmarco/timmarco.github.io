ModelThumbnail.prototype.defineLayout = function() {
  const thumbnail = this;
  const layout = {};

  const containerWidth = d3.select("#leftPane").node().getBoundingClientRect().width;

  layout.size = {};
  layout.size.width = containerWidth * 0.85;
  layout.size.height = containerWidth * 0.5625;

  layout.padding = {};
  layout.padding.left = layout.size.width / 12;
  layout.padding.top = layout.size.height / 12;


  return layout;
}
