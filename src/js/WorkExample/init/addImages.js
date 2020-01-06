WorkExample.prototype.addImages = function() {
  const example = this;

  const imageFullScale = Math.max.apply(null,[example.layout.size.width / example.imageSize.width,example.layout.size.height / example.imageSize.height]);


  const images = example.scales
    .append("image")
    .attr("href",function(d) { return d })
    .attr("filter","url(#"+example.identifier+")")
    .attr("x",-example.imageSize.width / 2)
    .attr("y",-example.imageSize.height / 2)
    .attr("width",example.imageSize.width)
    .attr("height",example.imageSize.height)
    .attr("viewbox","0 0 " + example.imageSize.width + " " + example.imageSize.height);

  example.layers.image
    .attr("transform","scale("+imageFullScale+")");

  return images;
}
