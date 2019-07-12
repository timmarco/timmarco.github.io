/* jshint esversion:6 */
Numberline.prototype.hideHighlight = function() {
  const chart = this;

  chart.highlightCircle
    .style("display","none");

  return chart;
};
