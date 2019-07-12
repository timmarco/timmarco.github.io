/* jshint esversion:6 */
LineChart.prototype.defineStyles = function() {
  const chart = this;

  let styles = {};

  styles.axisFontFamily = "Source Sans Pro";
  styles.axisFontSize = "12pt";

  styles.titleFontFamily = "Source Sans Pro";
  styles.titleFontSize = "18pt";
  styles.titleFontWeight = "bold";
  styles.titleFill = "black";
  styles.titleStroke = "white";

  styles.axisTitleFill = "black";
  styles.axisTitleFontSize = "0.75em";
  styles.axisTitleFontFamily = "Source Sans Pro";

  styles.playerYearFill = "white";
  styles.playerYearStroke = "blue";
  styles.playerYearHighlightFill = "blue";
  styles.playerYearLine = "#20639b";
  styles.playerYearLineStrokeWidth = 3;
  styles.playerProjectionDashArray = "5,5";
  styles.projectionAreaFill = "#ddf";
  styles.projectionAreaStroke = "#000";

  styles.compPlayerStroke = "#fafafa";
  styles.compPlayerStrokeWidth = 1;
  styles.compPlayerHighlightStroke = "#3caea3";

  styles.projectionLine = "#ed553b";
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
