/* jshint esversion:6 */
Numberline.prototype.scalePercentage = function() {
  const chart = this;

  chart
    .rescale([0,100]);

  return chart;
}
