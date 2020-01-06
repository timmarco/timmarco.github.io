SvgTutorialContainer.prototype.addLineOfCode = function(options) {
  const container = this;

  container.codeBlock
    .addLine(options);

  return container;
}
