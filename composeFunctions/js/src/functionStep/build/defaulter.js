/* global FunctionStep */
FunctionStep.prototype.defaulter = function(key,defaultValue) {
  const step = this;

  step[key] = step.options[key] ? step.options[key] : defaultValue;

  return step;
};
