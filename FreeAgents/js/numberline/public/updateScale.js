/* jshint esversion:6 */
Numberline.prototype.updateScale = function(values) {
  const chart = this;

  let extent,
    rangeMax,
    rangeMin;

  extent = d3.extent(values);
  rangeMax = chart.options.max !== undefined ? chart.options.max : extent[1];
  rangeMin = chart.options.min !== undefined ? chart.options.min : extent[0];

  chart.scale
    .domain([rangeMin,rangeMax]);

  return chart;
};
