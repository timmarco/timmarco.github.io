SvgTutorialContainer.prototype.addSvgElement = function() {
  const container = this;

  const block = new SvgTutorialSvgElement({
    "parent":container,
    "where":container.layers.code
  });

  return block;
}
