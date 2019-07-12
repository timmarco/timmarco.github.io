/* jshint esversion:6 */
Sparkline.prototype.defineMargins = function(preset) {
  const spark = this;

  let margins = spark.defaulter(preset,{});
  margins.left = spark.defaulter(margins.left,5);
  margins.right = spark.defaulter(margins.right,5);
  margins.top = spark.defaulter(margins.top,5);
  margins.bottom = spark.defaulter(margins.bottom,5);
  
  return margins;
};
