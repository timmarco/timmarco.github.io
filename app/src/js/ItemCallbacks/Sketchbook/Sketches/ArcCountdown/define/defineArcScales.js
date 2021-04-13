ArcCountdown.prototype.defineArcScales = function() {
  const countdown = this;

  return {
    "innerRadius":d3.scaleLinear()
      .domain([0,1])
      .range([countdown.arcCentralRadius - countdown.arcRadiusWidth,countdown.arcCentralRadius]),
    "outerRadius":d3.scaleLinear()
      .domain([0,1])
      .range([countdown.arcCentralRadius+ countdown.arcRadiusWidth,countdown.arcCentralRadius])
    }

}
