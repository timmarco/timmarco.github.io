/* jshint esversion:6 */
function Sparkline(options) {
  let spark = this;

  init(options);

  return spark;

  function init(options) {

    spark.where = options.where;
    spark.data = options.data;
    spark.yDomain = spark.defaulter(options.yDomain,[-2,10]);
    spark.size = spark.defineSize();
    spark.margins = spark.defineMargins();
    spark.referencePoints = spark.defineReferencePoints();
    spark.scales = spark.defineScales();
    spark.styles = spark.defineStyles();
    spark.areaGenerator = spark.defineAreaGenerator();

    spark.svg = spark.addSvg(spark.where);
    spark.zeroLine = spark.addZeroLine();
    spark.line = spark.addLine();
    spark.circles = spark.addCircles();

  }
}
