function ModelDescription(options) {
  const description = this;
  init(options);
  return description;

  function init(options) {
    description.layout = description.defineLayout();

    description.svg = description.addSvg();

  }
}
