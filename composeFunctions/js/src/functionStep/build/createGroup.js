/* global FunctionStep */
FunctionStep.prototype.createGroup = function() {
  const step = this;

  step.group = step.parent.svg
    .append("g")
    .attr("transform","translate("+step.x+","+step.y+")");

  return step;
};
