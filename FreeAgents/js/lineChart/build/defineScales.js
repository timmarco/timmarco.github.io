/* jshint esversion:6 */
LineChart.prototype.defineScales = function() {
  const chart = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([19,35])
    .range([chart.referencePoints.xMin,chart.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain([-2,10])
    .range([chart.referencePoints.yMin,chart.referencePoints.yMax]);

  return scales;

};
