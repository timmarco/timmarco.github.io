/* global FunctionPlotter */
FunctionPlotter.prototype.updateValues = function() {
  const plotter = this;

  plotter.functions.forEach((aFunction,index) => {
    aFunction
      .highlightValue(plotter.valueChain[index]);
  });

  return plotter;
};
