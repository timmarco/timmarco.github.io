/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.outputAxis = function() {
  const step = this;

  let axisGroup;

  axisGroup = step.group
    .append("g")
    .call(d3.axisBottom(step.parent.xScale).ticks(2))
    .attr("transform","translate("+0+","+step.height+")");


  return step;
};
