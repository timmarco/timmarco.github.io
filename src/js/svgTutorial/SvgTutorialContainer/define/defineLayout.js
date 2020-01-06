SvgTutorialContainer.prototype.defineLayout = function(options) {
  const container = this;

  const layout = options.layout ? options.layout : {};

  layout.size = layout.size ? layout.size : {};
  layout.size.width = layout.size.width ? layout.size.width : 960;
  layout.size.height = layout.size.height ? layout.size.height : 540;

  layout.size.midlines = {};
  layout.size.midlines.x = layout.size.width  / 2;
  layout.size.midlines.y = layout.size.height / 2;

  layout.gridHorizontal = d3.scaleLinear().domain([0,12]).range([0,layout.size.width]);
  layout.gridVertical = d3.scaleLinear().domain([0,12]).range([0,layout.size.height]);

  return layout;
}
