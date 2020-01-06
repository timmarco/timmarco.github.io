MobileWorkExample.prototype.addSwipeDiv = function() {
  const example = this;

  const swipeDiv = example.parent.swipeContainer
      .append("div")
      .style("float","left")
      .style("width","85%")
      .style("position","relative")
      .style("overflow","hidden");

  return swipeDiv;
}
