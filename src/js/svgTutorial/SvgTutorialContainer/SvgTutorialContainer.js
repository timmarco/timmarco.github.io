function SvgTutorialContainer(options) {
  const container = this;
  init(options)
  return container;

  function init(options) {
    container.where = options.where;

    container.layout = container.defineLayout(options);
    container.style = container.defineStyle(options);

    container.svg = container.addSvg();
    container.layers = container.addLayers();
    container.codeBlock = container.addCodeBlock();
    container.svgElement = container.addSvgElement();

  }
}
