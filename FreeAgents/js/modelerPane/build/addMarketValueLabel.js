/* jshint esversion:6 */
ModelerPane.prototype.addMarketValueLabel = function() {
  const pane = this;

  let text = pane.group
    .append("text")
    .attr("x",pane.referencePoints.overlayWinValueCoordinates.x)
    .attr("y",pane.referencePoints.overlayWinValueCoordinates.y)
    .attr("font-size","12pt")
    .attr("font-weight","bold")
    .text("Market Value of Wins");


  return text;
};
