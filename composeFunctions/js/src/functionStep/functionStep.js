/* exported FunctionStep */
function FunctionStep(options) {
  const functionStep = this;

  init(options);

  return functionStep;

  function init(options) {
    functionStep.options = options;

    _required();
    _defaults();

    functionStep
      .createGroup()
      .inputAxis()
      .outputAxis()
      .sampleValues()
      .addHighlight();

  }

  function _required() {

    functionStep.parent = options.parent;
    functionStep.inputs = [];

  }

  function _defaults() {

    functionStep
      .defaulter("range",[-100,100])
      .defaulter("y",50)
      .defaulter("x",0)
      .defaulter("height",50)
      .defaulter("sampleCount",20)
      .defaulter("functionToPlot",(x) => { return x;})
      .defaulter("stroke","rgba(0,0,0,0.125)")
      .defaulter("strokeWidth",1);

  }
}
