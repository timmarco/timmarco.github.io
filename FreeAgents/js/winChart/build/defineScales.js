/* jshint esversion:6 */
WinChart.prototype.defineScales = function() {
  const chart = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain(chart.domain)
    .range([chart.referencePoints.xMin,chart.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain([2019,2034])
    .range([chart.referencePoints.yMin,chart.referencePoints.yMax]);

  return scales;
}
