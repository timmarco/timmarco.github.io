/* jshint esversion:6 */
Minibar.prototype.addLabels = function(options) {
  const bar = this;
  let labels = {};

  labels.left = bar.layers.labels
    .append("text")
    .attr("dominant-baseline","middle")
    .attr("text-anchor","end")
    .attr("x",bar.referencePoints.minX - bar.styles.labels.offset)
    .attr("y",bar.referencePoints.verticalMidline)
    .attr("font-family",bar.styles.labels.fontFamily)
    .attr("font-size",bar.styles.labels.fontSize)
    .attr("font-weight",bar.styles.labels.fontWeight)
    .attr("fill",bar.styles.labels.fontFill)
    .text(options.leftLabel);

  // labels.start = bar.layers.labels
  //   .append("text")
  //   .attr("dominant-baseline","middle")
  //   .attr("text-anchor","right")
  //   .attr("x",bar.referencePoints.maxX + bar.styles.labels.offset)
  //   .attr("y",bar.referencePoints.verticalMidline)
  //   .attr("font-family",bar.styles.labels.fontFamily)
  //   .attr("font-size",bar.styles.labels.fontSize)
  //   .attr("font-weight",bar.styles.labels.fontWeight)
  //   .attr("fill",bar.styles.labels.fontFill)
  //   .text(options.rightLabel);

  return labels;
}
