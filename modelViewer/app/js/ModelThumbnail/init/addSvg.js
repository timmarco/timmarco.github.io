ModelThumbnail.prototype.addSvg = function() {
  const thumbnail = this;

  const svg = d3.select("#leftPane")
    .append("svg")
    .attr("width",thumbnail.layout.size.width)
    .attr("height",thumbnail.layout.size.height)
    .attr("cursor","pointer")
    .on('mouseover',function() { thumbnail.highlight(); })
    .on('mouseout',function() { thumbnail.unhighlight(); })
    .on('click',function() { thumbnail.parent.selectModel(thumbnail); });

  return svg;
}
