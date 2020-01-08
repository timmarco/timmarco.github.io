ModelDescription.prototype.defineLayout = function() {
  const description = this;
  const layout = {};

  layout.size = {};
  layout.size.width = d3.select("#rightPane").node().getBoundingClientRect().width;
  layout.size.height = layout.size.width * 0.13125;

  layout.safeAreas = {};

  layout.safeAreas.title = {};
  layout.safeAreas.title.x = 0;
  layout.safeAreas.title.y = layout.size.height / 6;
  layout.safeAreas.title.width = layout.size.width / 3;
  layout.safeAreas.title.height = layout.size.height * 2 / 3;

  layout.safeAreas.text = {};
  layout.safeAreas.text.x = layout.size.width / 3;
  layout.safeAreas.text.y = 0;
  layout.safeAreas.text.width = layout.size.width * 2 / 3;
  layout.safeAreas.text.height = layout.size.height;


  return layout;
}
