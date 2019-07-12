/* jshint esversion:6 */
Sparkline.prototype.defineAreaGenerator = function() {
  const spark = this;

  let generator = d3.area()
    .x((d) => { return spark.scales.x(d.index); })
    .y0((d) => { return spark.scales.y(0); })
    .y1((d) => { return spark.scales.y(d.datum); });

  return generator;
};
