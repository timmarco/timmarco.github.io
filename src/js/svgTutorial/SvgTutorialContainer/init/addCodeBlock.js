SvgTutorialContainer.prototype.addCodeBlock = function() {
  const container = this;

  const block = new SvgTutorialCodeBlock({
    "parent":container,
    "where":container.layers.code
  });

  return block;
}
