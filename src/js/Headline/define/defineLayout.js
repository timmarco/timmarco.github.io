Headline.prototype.defineLayout = function(options) {
  const headline = this;

  const layout = options.layout ? options.layout : {};

  layout.size = layout.size ? layout.size : {};
  layout.size.width = layout.size.width ? layout.size.width : d3.select(options.where).node().offsetWidth;
  layout.size.height = layout.size.height ? layout.size.height : layout.size.width  * 0.0675;

  layout.midlines = layout.midlines ? layout.midlines : {};
  layout.midlines.x = layout.size.width / 2;
  layout.midlines.y = layout.size.height / 2;

  layout.accent = layout.accent ? layout.accent : {};
  layout.accent.size = layout.accent.size ? layout.accent.size : {};
  layout.accent.size.width = layout.accent.size.width ? layout.accent.size.width : layout.size.width / 128;
  layout.accent.size.height = layout.accent.size.height ? layout.accent.size.height : layout.size.height;

  layout.background = layout.background ? layout.background : {};
  layout.background.size = layout.background.size ? layout.background.size : {};
  layout.background.size.height = layout.background.size.height ? layout.background.size.height : layout.size.height;
  layout.background.size.width = layout.background.size.width ? layout.background.size.width : layout.size.width;

  layout.text = layout.text ? layout.text : {};
  layout.text.x = layout.text.x ? layout.text.x : layout.size.width / 24;
  layout.text.y = layout.text.y ? layout.text.y : layout.midlines.y;
  layout.text.verticalPadding = layout.text.verticalPadding ? layout.text.verticalPadding : layout.size.height / 24;

  return layout;
}
