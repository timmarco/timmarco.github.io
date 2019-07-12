/* jshint esversion:6 */
ModelerPane.prototype.addRect = function() {
  const pane = this;

  let rect = pane.group
    .append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",pane.size.width)
    .attr("height",pane.size.height)
    .attr("fill",pane.styles.backgroundColor)
    .attr("stroke","black")
    .attr("stroke-width",1);

  return rect;
};
