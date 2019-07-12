/* exported FunctionPlotterInput */
function FunctionPlotterInput(options) {
  const input = this;

  init(options);

  return input;

  function init(options) {
    input.options = options;

    _required();
    _defaults();


    input
      .addTransformLine();

    if(input.isDiscrete) {
      input
        .addInputCircle()
        .addOutputCircle()
        .addInputText()
        .addOutputText();
    }
  }

  function _required() {
    input.parent = options.parent;
    input.plotter = input.parent.parent;
    input.data = options.data;
  }

  function _defaults() {
    input
      .defaulter("r",4)
      .defaulter("stroke","none")
      .defaulter("strokeWidth",0)
      .defaulter("fill","blue")
      .defaulter("lineStroke","rgba(0,0,0,0.125)")
      .defaulter("lineStrokeWidth",1)
      .defaulter("highlightFill","orange")
      .defaulter("highlightRadius",5)
      .defaulter("textSize","10pt")
      .defaulter("textForeground","orange")
      .defaulter("textBackground","white")
      .defaulter("textOutline",3)
      .defaulter("isDiscrete",false);
  }
}
