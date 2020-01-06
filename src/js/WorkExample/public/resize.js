WorkExample.prototype.resize = function() {
  const example = this;

  example.layout = example.defineLayout();

  example.svg
    .attr("height",example.layout.size.height)
    .attr("width",example.layout.size.width);

  const imageFullScale = Math.max.apply(null,[example.layout.size.width / example.imageSize.width,example.layout.size.height / example.imageSize.height]);

  example.scales.selectAll("image")
    .attr("x",-example.imageSize.width / 2)
    .attr("y",-example.imageSize.height / 2)
    .attr("width",example.imageSize.width)
    .attr("height",example.imageSize.height);

  example.layers.image
    .attr("transform","scale("+imageFullScale+")");


  const textGroupHeight = example.headline.node().getBBox().height;
  const yPosition = example.layout.centerY - textGroupHeight / 2;

  example.headline
    .attr("transform","translate("+example.layout.textTranslateX+","+yPosition+")")

  // TODO: CHECK IF HEADLINE / BODY IS TOO WIDE AND SCALE ACCORDINGLY!

  example.body
    .attr("x",example.layout.textTranslateX)
    .attr("y",example.layout.size.height);




  return example;
}
