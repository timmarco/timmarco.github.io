function SvgTutorialCodeBlock(options) {
  const block = this;
  init(options);
  return block;

  function init(options) {
    block.parent = options.parent;
    block.background = block.addBackground();
    block.foreignObject = block.addForeignObject();
    block.body = block.addBody();
    block.div = block.addCodeDiv();

  }
}
