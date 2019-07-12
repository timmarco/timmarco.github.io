/* jshint esversion:6 */
Tooltip.prototype.move = function(event,offset) {
  const tooltip = this;

  event = d3.event;

  if(offset === undefined) {
    offset = {};
  }
  offset.x = offset.x ? offset.x : 10;
  offset.y = offset.y ? offset.y : 0;

  let height = tooltip.div.node().clientHeight;

  let xPosition = event.pageX + offset.x;
  let yPosition = event.pageY + offset.y - height / 2;

  tooltip.div
    .style("left",xPosition + "px")
    .style("top",yPosition + "px");

  return tooltip;
};
