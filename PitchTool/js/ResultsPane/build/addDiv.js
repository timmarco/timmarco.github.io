/* jshint esversion:6 */
ResultsPane.prototype.addDiv = function() {
  const pane = this;

  let div = d3.select("#resultsPane")
    .append("div")
    .classed("resultsPane",true);

  return div;
};
