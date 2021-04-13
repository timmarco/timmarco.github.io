ArcCountdown.prototype.defineArcGenerator = function() {
  const countdown = this;
  
  return d3.arc()
    .innerRadius(countdown.arcCentralRadius - countdown.arcRadiusWidth)
    .outerRadius(countdown.arcCentralRadius + countdown.arcRadiusWidth);
}
