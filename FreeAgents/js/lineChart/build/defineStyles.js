/* jshint esversion:6 */
LineChart.prototype.defineStyles = function() {
  const chart = this;

  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "10pt";

  styles.titleFontFamily = "Source Sans Pro";
  styles.titleFontSize = "18pt";
  styles.titleFontWeight = "bold";
  styles.titleFill = "black";
  styles.titleStroke = "white";

  styles.axisTitleFill = "black";
  styles.axisTitleFontSize = "0.75em";
  styles.axisTitleFontFamily = "Source Sans Pro";
  styles.axisTitleFontWeight = "bold";

  styles.playerYearFill = "white";
  styles.playerYearStroke = "blue";
  styles.playerYearHighlightFill = "blue";
  styles.playerYearLine = "#20639b";
  styles.playerYearLineStrokeWidth = 3;
  styles.playerProjectionDashArray = "5,5";
  styles.projectionAreaFill = "rgba(221,221,255,0.75)";
  styles.projectionAreaStroke = "#000";

  styles.compPlayerStroke = "#fafafa";
  styles.compPlayerStrokeWidth = 1;
  styles.compPlayerHighlightStroke = "black";

  styles.projectionLine = "#20639b";
  styles.projectionLineStroke = 3;

  styles.zeroLineStroke = "#333";
  styles.zeroLineStrokeWidth = 2;

  styles.starterLineStroke = "#666";
  styles.starterLineStrokeWidth = 1;

  styles.allStarLineStroke = "#999";
  styles.allStarLineStrokeWidth = 1;

  styles.mvpLineStroke = "#999";
  styles.mvpLineStrokeWidth = 1;

  return styles;


};
