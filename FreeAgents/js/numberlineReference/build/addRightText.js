/* jshint esversion:6 */
NumberlineReference.prototype.addRightText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.rightFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("font-weight","lighter")
    .attr("text-anchor","end")
    .attr("dominant-baseline","baseline")
    .attr("x",500)
    .attr("y",17)
    .html(chart.labels.right);

  return text;
};
