/* jshint esversion:6 */
Numberline.prototype.defineScale = function() {
  const chart = this;
  let scale;

  scale = d3.scaleLinear()
    .range([chart.margins.left,chart.size.width - chart.margins.right]);

  return scale;
};
