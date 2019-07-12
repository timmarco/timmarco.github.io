/* global FunctionStep  */
FunctionStep.prototype.addHighlight = function() {
  const step = this;

  step.highlight = step.group
    .append("line")
    .attr("stroke","orange")
    .attr("stroke-width",5);
    
  return step;
};
