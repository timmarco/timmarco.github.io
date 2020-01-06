WorkExample.prototype.addScales = function() {
  const example = this;

  const translateX = example.imageSize.width / 2;
  const translateY = example.imageSize.height / 2;
  const translate = "translate("+translateX+","+translateY+")";

  const translateLayer = example.layers.image
    .append("g");

  translateLayer
    .attr("transform",translate);

  const scales = translateLayer
    .selectAll("g")
    .data(example.imagePaths)
    .enter()
    .append("g")
    .attr("transform","scale(1)");

  return scales;
}
