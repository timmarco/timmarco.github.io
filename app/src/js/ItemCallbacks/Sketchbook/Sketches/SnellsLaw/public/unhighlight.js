SnellsLaw.prototype.unhighlight = function() {
  const snells = this;
  return () => {
    snells.source
      .transition()
      .duration(250)
      .attr("r",0);

    snells.incidentRay
      .interrupt();

    snells.refractedRay
      .interrupt();
  }
}
