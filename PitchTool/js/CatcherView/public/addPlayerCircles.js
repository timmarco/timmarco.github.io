/* jshint esversion:6 */
CatcherView.prototype.addPlayerCircles = function(data) {
  const view = this;

  view.pitchRawData = data;

  view.pitchCircles = view.layers.pitchCircles
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    // .attr("r",view.scales.x(0.0675) - view.scales.x(0))
    .attr("r",4)
    .attr("fill","rgba(0,0,0,0.06275)")
    .attr("stroke","rgba(0,0,0,0.06275)")
    .attr("stroke-width",0.5)
    .attr("cx",(d) => { return view.scales.x(d.pX); })
    .attr("cy",(d) => { return view.scales.y(d.pZ); });

  return view;
};
