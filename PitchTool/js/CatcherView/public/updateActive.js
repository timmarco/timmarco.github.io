/* jshint esversion:6 */
CatcherView.prototype.updateActive = function(data) {
  const view = this;


  view.layers.activeCircles
    .selectAll("*")
    .remove();

  view.layers.activeCircles
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",(pitch) => { return view.scales.x(pitch.pX); })
    .attr("cy",(pitch) => { return view.scales.y(pitch.pZ); })
    .attr("r",4)
    .attr("fill","rgba(0,0,0,0.00675)")
    .attr("stroke","rgba(0,0,0,0.125)");


  return view;
};
