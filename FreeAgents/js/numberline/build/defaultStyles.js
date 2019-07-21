/* jshint esversion:6 */
Numberline.prototype.defaultStyles = function(options) {
  const chart = this;
  let styles = {};
  options.styles = chart.defaulter(options.styles,{});
  styles.inactiveCircleRadius = chart.defaulter(options.styles.inactiveCircleRadius,3);
  styles.inactiveCircleFill  = chart.defaulter(options.styles.inactiveCircleFill,"#fff");
  styles.inactiveCircleOpacity = chart.defaulter(options.styles.inactiveCircleOpacity,1);
  styles.inactiveCircleStroke = chart.defaulter(options.styles.inactiveCircleStroke,"#333");
  styles.inactiveCircleStrokeWidth = chart.defaulter(options.styles.inactiveCircleStrokeWidth,1);

  styles.activeCircleRadius = chart.defaulter(options.activeCircleRadius,7);
  styles.activeCircleFill = chart.defaulter(options.styles.activeCircleFill,"#3caea3");
  styles.activeCircleOpacity = chart.defaulter(options.styles.activeCircleFillOpacity,1.0);
  styles.activeCircleStroke = chart.defaulter(options.styles.activeCircleStroke,"red");
  styles.activeCircleStrokeWidth = chart.defaulter(options.styles.activeCircleStrokeWidth,10);

  styles.highlightedCircleRadius = chart.defaulter(options.styles.highlightedCircleRadius,5);
  styles.highlightedCircleFill = chart.defaulter(options.styles.highlightedCircleFill,"#f6d55c");
  styles.highlightedCircleOpacity = chart.defaulter(options.styles.highlightedCircleOpacity,1.0);
  styles.highlightedCircleStroke = chart.defaulter(options.styles.highlightedCircleStroke,"gray");
  styles.highlightedCircleStrokeWidth = chart.defaulter(options.styles.highlightedCircleStrokeWidth,1);

  styles.meanIndicatorStroke = "black";
  styles.meanIndicatorStrokeWidth = 2;
  styles.oneStandardDeviationIndicatorFill = "#4978A4";
  styles.twoStandardDeviationIndicatorFill = "#D7DDE3";
  styles.indicatorFontSize = "8pt";
  styles.indicatorFontFamily = "Helvetica Neue";
  styles.indicatorFill = "#666";
  styles.indicatorHighlightColor = "#ed553b";
  styles.indicatorHighlightStrokeWidth = 3;

  return styles;
};
