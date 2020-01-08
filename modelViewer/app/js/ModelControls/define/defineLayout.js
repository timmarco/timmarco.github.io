ModelControls.prototype.defineLayout = function() {
  const controls = this;

  const layout = {};
  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  return layout;
}
