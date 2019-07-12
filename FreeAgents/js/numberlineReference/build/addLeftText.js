/* jshint esversion:6 */
NumberlineReference.prototype.addLeftText = function() {
  const chart = this;
  let text;

  text = chart.svg
    .append("text")
    .attr("font-size",chart.styles.fontSize)
    .attr("fill",chart.styles.leftFill)
    .attr("font-family",chart.styles.fontFamily)
    .attr("text-anchor","start")
    .attr("alignment-baseline","middle")
    .attr("x",0)
    .attr("y",10)
    .html(chart.labels.left);


  return text;
};
