/* jshint esversion:6 */
Sparkline.prototype.defineSize = function(preset) {
  const spark = this;

  let size = spark.defaulter(preset,{});
  size.height = spark.defaulter(size.height,25);
  size.width = spark.defaulter(size.width,150);

  return size;
};
