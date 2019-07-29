/* jshint esversion:6 */
CatcherView.prototype.updateHighlight = function(data,fill) {
  const view = this;

  view
    .clearHighlight();

  view.layers.highlightCircles
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",(pitch) => { return view.scales.x(pitch.pX); })
    .attr("cy",(pitch) => { return view.scales.y(pitch.pZ); })
    .attr("r",4)
    .attr("fill",fill)
    .attr("stroke","black");


  return view;
};
