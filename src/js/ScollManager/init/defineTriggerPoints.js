ScrollManager.prototype.defineTriggerPoints = function() {
  const manager = this;

  const triggerPoints = {};

  d3.selectAll(".triggerPoint")
    .each(function() {
      const element = d3.select(this);

      const triggerName = d3.select(this)
        .attr("data-trigger-point");

      const triggerPosition = element.node()
        .getBoundingClientRect()
        .top;

      triggerPoints[triggerPosition] = triggerName;
    });

  return triggerPoints;
}
