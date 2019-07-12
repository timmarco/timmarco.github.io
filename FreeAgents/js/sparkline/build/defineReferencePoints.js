/* jshint esversion:6 */
Sparkline.prototype.defineReferencePoints = function() {
  const spark = this;

  let referencePoints = {};
  referencePoints.xMin = spark.margins.left;
  referencePoints.xMax = spark.size.width - spark.margins.right;
  referencePoints.yMin = spark.size.height - spark.margins.bottom;
  referencePoints.yMax = spark.margins.top;

  return referencePoints;
};
