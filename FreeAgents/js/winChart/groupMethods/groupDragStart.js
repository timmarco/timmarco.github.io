/* jshint esversion:6 */
WinChart.prototype.groupDragStart = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    chart.dragLock = true;

    element
      .select(".circle-highlight")
      .attr("opacity",chart.styles.highlightDragOpacity);
  }
};
