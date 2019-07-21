/* jshint esversion:6 */
Tooltip.prototype.showNumberlineDatum = function(datum) {
  const tooltip = this;
  let chartName = datum.chartName;
  let playerName = datum.name;
  let playerValue = datum.value;
  let summaryData = datum.summaryData;
  let zScore = (playerValue - summaryData.mean) / summaryData.standardDeviation;
  let zScoreStatement;
  let zScoreClass;

  if(zScore <= - 2) {
    zScoreStatement = "Significantly below the mean.";
    zScoreClass = "significantlyBelowMean";
  }
  if(zScore > -2 && zScore < -1) {
    zScoreStatement = "Well below the mean.";
    zScoreClass = "wellBelowMean";
  }
  if(zScore >= -1 && zScore < 0) {
    zScoreStatement = "Below the mean.";
    zScoreClass = "belowMean";
  }
  if(zScore >= 0 && zScore < 1) {
    zScoreStatement = "Above the mean.";
    zScoreClass = "aboveMean";
  }
  if(zScore >= 1 && zScore < 2) {
    zScoreStatement = "Well above the mean.";
    zScoreClass = "wellAboveMean";
  }
  if(zScore >= 2) {
    zScoreStatement = "Significantly above the mean.";
    zScoreClass = "significantlyAboveMean";
  }

  let display = "<div class='tooltipNumberlinePlayerName'>" + playerName + "</div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineStatName'>" + datum.chartName + "</span>: <span class='tooltipNumberlineStatValue'>" + datum.value + "</span> | <span class='tooltipNumberlineStatName'>Z-Score:</span> <span class='tooltipNumberlineStatValue'> "+zScore.toFixed(2)+" </span></div>";
  display += "<div class='tooltipNumberLineValueLine'><span class='tooltipNumberlineZScoreStatement  "+ zScoreClass +"'>" + zScoreStatement + "</span></div>";

  tooltip
    .update(display)
    .show()
    .move(d3.event);


  return tooltip;

};
