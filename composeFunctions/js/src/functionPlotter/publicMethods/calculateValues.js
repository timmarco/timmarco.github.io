/* global FunctionPlotter */
FunctionPlotter.prototype.calculateValues = function(initialValue) {
  const plotter = this;

  let currentValue,
    valueChain;

  currentValue = initialValue;
  valueChain = [];

  plotter.functions.forEach((aFunction) => {
    const calculationStep = {};
    calculationStep.input = currentValue;
    calculationStep.output = aFunction.functionToPlot(currentValue);
    valueChain.push(calculationStep);
    currentValue = calculationStep.output;
  });

  plotter.valueChain = valueChain;
  plotter.outputValue = valueChain[valueChain.length - 1];

  return plotter;
};
