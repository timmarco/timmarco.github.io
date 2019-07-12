/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.sampleValues = function() {
  const step = this;

  let sampleData,
    sampleSteps;

  sampleData = [];
  sampleSteps = (step.parent.domain[1] - step.parent.domain[0]) / step.sampleCount;
  d3.range(step.parent.domain[0],step.parent.domain[1],sampleSteps).forEach((inputValue) => {
    sampleData.push({
      "input":inputValue,
      "output":step.functionToPlot(inputValue)
    });
  });

  step
    .addInputs(sampleData);


  return step;
};
