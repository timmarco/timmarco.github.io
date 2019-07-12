/* jshint esversion:6 */
TextLabel.prototype.addForeground = function() {
  const label = this;

  let text;

  text = label.group
    .append("text")
    .attr("x",0)
    .attr("y",0)
    .attr("text-anchor",label.styles.textAnchor)
    .attr("alignment-baseline","central")
    .attr("font-family",label.styles.fontFamily)
    .attr("font-size",label.styles.fontSize)
    .attr("font-weight",label.styles.fontWeight)
    .attr("stroke","none")
    .attr("fill",label.styles.foregroundColor)
    .text(label.text);

  return text;
};
