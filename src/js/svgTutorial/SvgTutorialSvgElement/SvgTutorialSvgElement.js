function SvgTutorialSvgElement(options) {
  const element = this;
  init(options);
  return element;

  function init(options) {
    element.parent = options.parent;

    element.group = element.addGroup();
    element.background = element.addBackground();
    element.container = element.addContainer();
    element.circle = element.addCircle();

    element.highlightGroup = element.group.append("g");
    element.widthIndicator = element.addWidthIndicator();
    element.heightIndicator = element.addHeightIndicator();
    element.radiusIndicator = element.addRadiusIndicator();
    element.xIndicator = element.addXIndicator();
    element.yIndicator = element.addYIndicator();


  }
}
