/* global FunctionStep */
FunctionStep.prototype.highlightValue = function(value) {
  const step = this;

  if(isFinite(step.parent.xScale(value.output))) {
    step.highlight
      .attr("x1",step.parent.xScale(value.input))
      .attr("x2",step.parent.xScale(value.output))
      .attr("y1",0)
      .attr("y2",step.height);
  }

  return step;
};
