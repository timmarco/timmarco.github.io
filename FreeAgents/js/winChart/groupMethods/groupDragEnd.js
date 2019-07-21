/* jshint esversion:6 */
WinChart.prototype.groupDragEnd = function() {
  const chart = this;

  return function(datum,index) {
    let element = d3.select(this);

    chart.dragLock = false;

    element
      .select(".circle-highlight")
      .attr("opacity",chart.styles.highlightCircleOpacity);

  }
}
