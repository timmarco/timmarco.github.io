function SwipeIndicator(app,count) {
  const indicator = this;
  init(app,count);
  return indicator;

  function init(app,count) {
    indicator.parent = app;
    indicator.count = count;

    indicator.currentIndex = 0;

    indicator.layout = indicator.defineLayout();
    indicator.scale = indicator.defineScale();
    indicator.svg = indicator.addSvg();
    indicator.circles = indicator.addCircles();

    indicator
      .update(indicator.currentIndex);
  }
}
