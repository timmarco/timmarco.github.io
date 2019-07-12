/* global FunctionStep */
/* global FunctionPlotterInput */
FunctionStep.prototype.addInputs = function(sampleData) {
  const step = this;

  sampleData.forEach((datum) => {
    let createdInput;

    createdInput = new FunctionPlotterInput({
      "parent":step,
      "data":datum,
      "isDiscrete":step.parent.isDiscrete
    });
  });


  return step;
};
