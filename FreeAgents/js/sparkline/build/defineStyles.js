/* jshint esversion:6 */
Sparkline.prototype.defineStyles = function(preset) {
  const spark = this;

  styles = spark.defaulter(preset,{});
  styles.zeroLineStroke = spark.defaulter(styles.zeroLineStroke,"#aaa");
  styles.zeroLineStrokWidth = spark.defaulter(styles.zeroLineStrokWidth,1);
  styles.circleFill = spark.defaulter(styles.circleFill,"#173f5f");
  styles.circleRadius = spark.defaulter(styles.circleRadius,1);

  styles.lineStroke = spark.defaulter(styles.lineStroke,"#173f5f");
  styles.lineStrokeWidth = spark.defaulter(styles.lineStrokeWidth,1);
  styles.areaFill = spark.defaulter(styles.areaFill,"#20639b");

  return styles;
};
