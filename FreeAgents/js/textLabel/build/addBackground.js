/* jshint esversion:6 */
TextLabel.prototype.addBackground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("dominant-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke",label.styles.backgroundStroke)
    .attr("fill","none")
    .attr("stroke-width",label.styles.outlineWidth)
    .text(label.text);

  return text;
};
