/* jshint esversion:6 */
Sparkline.prototype.addSvg = function(where) {
  const spark = this;

  let svg = where
    .append("svg")
    .attr("height",spark.size.height)
    .attr("width",spark.size.width)
    .on('mousemove',function() {
      let event = d3.event;
      let nearestX = spark.scales.x.invert(d3.event.offsetX).toFixed(0);
      if(spark.data[nearestX] !== undefined) {
        if(spark.tooltip) {
          spark.tooltip
            .update(spark.data[nearestX])
            .show()
            .move();
        }
      } else {
        spark.tooltip.hide();
      }
    })
    .on('mouseout',() => {
      if(spark.tooltip) {
        spark.tooltip.hide();
      }
    });

  return svg;
};
