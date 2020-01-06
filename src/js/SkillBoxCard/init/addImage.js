SkillBoxCard.prototype.addImage = function() {
  const card = this;

  const scaleFactor = Math.max.apply(null,[card.layout.size.width / card.imageSize.width,card.layout.size.height / card.imageSize.height]);

  const scale = card.layers.background
    .append("g")
    .attr("transform","scale("+scaleFactor+")");

  const offset = scale
    .append("g")
    .attr("transform","translate("+(card.layout.size.width / 2)+","+(card.layout.size.height / 2)+")");

  const image = offset
    .append("image")
    .attr("width",card.imageSize.width)
    .attr("height",card.imageSize.height)
    .attr("href",card.imageSource)
    .attr("x",0)
    .attr("y",0)
    .attr("transform","translate("+(-card.layout.size.width / 2)+","+(-card.layout.size.height / 2)+")");

  offset.append("circle")
    .attr("r",5)
    .attr("fill","orange")
    .attr("stroke","black")
    .attr("stroke-width",2);


  return image;
}
