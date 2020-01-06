WorkExample.prototype.defineLayout = function() {
  const example = this;
  const layout = {};
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const aspectRatio = windowWidth / windowHeight;

  layout.size = {};
  layout.size.width = windowWidth / 3;
  layout.size.height = windowHeight / 3;

  layout.centerX = layout.size.width / 2;
  layout.centerY = layout.size.height / 2;

  layout.maxTextWidth = layout.size.width * 0.8;
  layout.textTranslateX = layout.size.width * 0.1;

  layout.headlineHighlightY = layout.size.height * 0.2;


  return layout;
}
