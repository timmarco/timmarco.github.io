/* jshint esversion:6 */
CatcherView.prototype.addPlayerStrikeZone = function(zone) {
  const view = this;

  view.playerStrikeZone = view.layers.zone
    .append("rect")
    .attr("x",view.scales.x(-8.5 / 12))
    .attr("y",view.scales.y(zone.top))
    .attr("width",view.scales.x(6.5/12) - view.scales.x(-8.15/12))
    .attr("height",view.scales.y(6 - zone.bottom))
    .attr("fill","none")
    .attr("stroke","#333")
    .attr("stroke-width",3);

  return view;
};
