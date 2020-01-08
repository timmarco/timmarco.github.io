function ModelDescriptionHeadline(options) {
  const headline = this;
  init(options);
  return headline;

  function init(options) {
    headline.parent = options.parent;
    headline.textString = options.model.name.join(" ");
    headline.coordinates = {"x":0,"y":0,"yStart":headline.parent.layout.size.height};

    headline.group = headline.addGroup();
    headline.rect = headline.addRect();
    headline.text = headline.addText();
    headline.resizeRect();
  }
}
