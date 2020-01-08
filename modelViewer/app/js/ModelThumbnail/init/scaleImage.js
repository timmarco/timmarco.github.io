ModelThumbnail.prototype.scaleImage = function() {
  const thumbnail = this;

  const imageScale = thumbnail.layout.size.width / 1920;

  thumbnail.layers.background
    .attr("transform","scale("+imageScale+")");

}
