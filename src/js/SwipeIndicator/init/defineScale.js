SwipeIndicator.prototype.defineScale = function() {
  const indicator = this;

  const scale = d3.scaleLinear()
    .domain([0,indicator.count])
    .range([indicator.layout.scaleMin,indicator.layout.scaleMax]);

  return scale;
}
