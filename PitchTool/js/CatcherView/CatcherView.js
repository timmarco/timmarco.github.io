/* jshint esversion:6 */
function CatcherView(options) {
  const view = this;
  init(options);
  return view;

  function init(options) {
    view.player = options.player;
    view.where = options.where;


    view.size = view.defineSize(options);
    view.scales = view.defineScales(options);

    view.group = view.addGroup();
    view.layers = view.addLayers();

    view.group
      .attr("transform","translate(250,50)");

    view.brushBox = view.addBrushBox();

    view.yAxis = d3.axisLeft(view.scales.y);
    view.yAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,0)")
      .call(view.yAxis);

    view.xAxis = d3.axisBottom(view.scales.x);
    view.xAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,500)")
      .call(view.xAxis);


  }
}
