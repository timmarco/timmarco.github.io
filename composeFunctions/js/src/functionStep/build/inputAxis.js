/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.inputAxis = function() {
  const step = this;

  let axisGroup;

  axisGroup = step.group
    .append("g")
    .call(d3.axisTop(step.parent.xScale).ticks(2));


  return step;
};
