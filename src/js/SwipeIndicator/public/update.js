SwipeIndicator.prototype.update = function(currentIndex) {
  const indicator = this;
  indicator.currentIndex = currentIndex;

  indicator.circles
    .transition()
    .duration(250)
    .attr("fill",function(d,i) {
      if(i == indicator.currentIndex) { return "green"; };
      return "#aaa";
    });

  return indicator;
}
