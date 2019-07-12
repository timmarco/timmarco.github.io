/* jshint esversion:6 */
Tooltip.prototype.showOneStandardDeviation = function(summaryData,name) {
  const tooltip = this;

  let display;

  display = "The one standard deviation interval for <span class='tooltipStatName'>" + name + "</span> was [<span class='tooltipDeviationInterval'>"+ summaryData.oneBelowStandardDeviation.toFixed(2)+"</span> , <span class='tooltipDeviationInterval'>"+summaryData.oneAboveStandardDeviation.toFixed(2)+"</span>].";

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};
