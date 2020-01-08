ModelThumbnail.prototype.addImage = function() {
  const thumbnail = this;

  const image = thumbnail.layers.background
    .append("image")
    .attr("x",0)
    .attr("y",0)
    .attr("width",1920)
    .attr("height",1080)
    .attr("href",thumbnail.imagePath);
    
  return image;
}
