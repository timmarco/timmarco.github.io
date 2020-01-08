ModelThumbnail.prototype.addHeadline = function() {
  const thumbnail = this;

  const headlines = [];

  thumbnail.headlineText.forEach((line) => {
    const group = thumbnail.layers.headlineOffset
      .append("g");
    const rect = thumbnail.addHeadlineRect(group);
    const text = thumbnail.addHeadlineText(group,line);
    const textSize = text.node().getBBox();

    rect
      .attr("width",textSize.width + 10)
      .attr("height",textSize.height + 2);

    text
      .attr("x",5)
      .attr("y",textSize.height / 2 + 2);

    headlines
      .push(group);
  });

  return headlines;
}
