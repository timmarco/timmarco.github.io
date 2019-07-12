/* exported FunctionPlotter */
function FunctionPlotter(options) {
  const plotter = this;

  init(options);

  return plotter;

  function init(options) {

    plotter.options = options;
    _required();
    _defaults();

    plotter
      .addSvg()
      .addAxis()
      .defineXScale()
      .addInputLabel()
      .addOutputLabel()
      .addTitle();
  }


  function _required() {

    plotter.where = plotter.options.where;

  }

  function _defaults() {

    plotter
      .defaulter("interactive",true)
      .defaulter("lineHeight",100)
      .defaulter("domain",[-10,10])
      .defaulter("height",200)
      .defaulter("width",800)
      .defaulter("margins",{"left":50,"top":20,"bottom":20,"right":50})
      .defaulter("functions",[])
      .defaulter("fontFamily","Oswald")
      .defaulter("fontColor","#000033")
      .defaulter("samples",20)
      .defaulter("sampleColor","#eee")
      .defaulter("titleString","")
      .defaulter("isDiscrete",false);

    plotter.range = [plotter.margins.left,plotter.width - plotter.margins.right];

  }

}
