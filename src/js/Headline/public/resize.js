Headline.prototype.resize = function() {
  const headline = this;
  const factors = {};

  const textDesiredHeight = headline.layout.size.height - headline.layout.text.verticalPadding;
  const textRenderedHeight = headline.text
    .node()
    .getBBox()
    .height;

  const textRatio = textDesiredHeight / textRenderedHeight;

  headline.text
    .attr("font-size",textRatio + "em");

  const updatedTextRenderedSize = headline.text
    .node()
    .getBBox();

  const newRectWidth = (2 * updatedTextRenderedSize.x) + updatedTextRenderedSize.width;

  headline.background
    .attr("width",newRectWidth);

  return headline;
}
