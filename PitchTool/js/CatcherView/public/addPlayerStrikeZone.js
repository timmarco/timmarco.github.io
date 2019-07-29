/* jshint esversion:6 */
CatcherView.prototype.addPlayerStrikeZone = function(zone) {
  const view = this;

  view.playerStrikeZone = view.layers.zone
    .append("rect")
    .attr("x",view.scales.x(-8.5 / 12))
    .attr("y",view.scales.y(zone.top))
    .attr("width",view.scales.x(6.5/12) - view.scales.x(-8.15/12))
    .attr("height",view.scales.y(6 - zone.bottom))
    .attr("fill","rgba(0,0,255,0.125)")
    .attr("stroke","red")
    .attr("stroke-width",2);

  return view;
};
