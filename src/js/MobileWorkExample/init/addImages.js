MobileWorkExample.prototype.addImages = function() {
  const example = this;

  const imageFullScale = Math.max.apply(null,[example.layout.size.width / example.imageSize.width,example.layout.size.height / example.imageSize.height]);

  const image = example.layers.image
    .append("image")
    .attr("xlink:href",example.imagePaths[0])
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .attr("viewbox","0 0 " + example.layout.size.width + " " + example.layout.size.height);

  return image;
}
