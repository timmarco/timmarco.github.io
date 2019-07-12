/* jshint esversion:6 */
Tooltip.prototype.showTwoStandardDeviations = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The two standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.twoBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.twoAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};
