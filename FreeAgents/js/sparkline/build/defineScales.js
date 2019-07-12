/* jshint esversion:6 */
Sparkline.prototype.defineScales = function() {
  const spark = this;

  let scales = {};

  scales.x = d3.scaleLinear()
    .domain([0,spark.data.length -1])
    .range([spark.referencePoints.xMin,spark.referencePoints.xMax]);

  scales.y = d3.scaleLinear()
    .domain(spark.yDomain)
    .range([spark.referencePoints.yMin,spark.referencePoints.yMax]);

  return scales;
};
