/* jshint esversion:6 */
WinChart.prototype.defineStyles = function() {
  const chart = this;
  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "8pt";

  styles.lineStroke = "#555";
  styles.lineStrokeWidth = 3;

  styles.circleRadius = 3;
  styles.circleFill = "white";
  styles.circleStroke = "#aaa";
  styles.circleStrokeWidth = 1;

  styles.highlightCircleRadius = 10;
  styles.highlightCircleFill = "#ed553b"
  styles.highlightCircleOpacity = 0.25;
  styles.highlightDragOpacity = 1;

  styles.labelFontFamily = "Source Sans Pro";
  styles.labelFontSize = "8pt"
  styles.labelFontFill = "black"
  styles.labelFontOpacity = 1;
  styles.labelHighlightFontSize = "10pt";
  styles.labelHighlightOpacity = 1;


  styles.highlightYearStroke = "white";
  styles.highlightYearStrokeWidth = 2;
  styles.highlightYearFill = "black";



  return styles;
}
