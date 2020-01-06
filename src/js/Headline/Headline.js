function Headline(options) {
  const headline = this;
  init(options);
  return headline;

  function init(options) {
    headline.parent = options.parent;
    headline.where = options.where;
    headline.string = options.string;

    headline.hasTransitioned = false;

    headline.layout = headline.defineLayout(options);
    headline.style = headline.defineStyle(options);

    headline.svg = headline.addSvg();
    headline.defs = headline.addDefs();
    headline.background = headline.addBackground();
    headline.text = headline.addText();
    headline.curtainGroup = headline.addCurtainGroup();
    headline.accent = headline.addAccent();

    headline.resize();

  }
}
