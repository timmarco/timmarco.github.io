/* jshint esversion:6 */
NumberlineReference.prototype.addRightText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.rightFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("x",300)
    .attr("y",10)
    .html(chart.labels.right);

  return text;
};
