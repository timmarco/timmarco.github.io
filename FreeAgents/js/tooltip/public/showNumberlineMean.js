/* jshint esversion:6 */
Tooltip.prototype.showNumberlineMean = function(summaryData,name) {
  const tooltip = this;

  let display = "";

  display = "The mean value for <span class='tooltipStatName'> " + name + "</span> was <span class='tooltipStatMean'>" + summaryData.mean.toFixed(2) + "</span>. Standard Deviation = " + summaryData.standardDeviation.toFixed(2);

  tooltip
    .update(display)
    .show()
    .move(d3.event);

  return tooltip;
};
