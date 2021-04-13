SnellsLaw.prototype.defineArcGenerator = function() {
  const snells = this;
  return d3.arc()
    .innerRadius(72.5)
    .outerRadius(75);
}
