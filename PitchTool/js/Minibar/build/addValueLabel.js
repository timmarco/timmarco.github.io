/* jshint esversion:6 */
Minibar.prototype.addValueLabel = function() {
  const bar = this;

  let label = bar.layers.valueLabel
    .append("text")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","start")
    .attr("dx",bar.styles.valueLabel.xOffset)
    .attr("y",bar.referencePoints.verticalMidline)
    .attr("font-family",bar.styles.valueLabel.fontFamily)
    .attr("font-size",bar.styles.valueLabel.fontSize)
    .attr("font-weight",bar.styles.valueLabel.fontWeight)
    .attr("fill",bar.styles.valueLabel.fontFill);

  return label;

};
