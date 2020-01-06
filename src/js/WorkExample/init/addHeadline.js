WorkExample.prototype.addHeadline = function() {
  const example = this;

  const textGroup = example.layers.text
    .append("g");

  const textLines = [];
  example.text.forEach((lineOfText) => {
    const lineGroup = textGroup.append("g");

    const background = lineGroup
      .append("rect")
      .attr("fill","black");

    const text = lineGroup
      .append("text")
      .attr("font-family","Oswald")
      .attr("font-weight",500)
      .attr("fill","white")
      .attr("dx",10)
      .attr("font-size","18pt")
      .attr("dominant-baseline","text-before-edge")
      .text(lineOfText);

    const textSize = lineGroup.node().getBBox();

    background
      .attr("width",textSize.width + 20)
      .attr("height",textSize.height);

    textLines.push(lineGroup);

  });

  let runningHeight = 0;

  textLines.forEach((group) => {
    const height = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningHeight+")");

    runningHeight += height;
  });

  const textGroupHeight = textGroup.node().getBBox().height;
  const yPosition = example.layout.centerY - textGroupHeight / 2;

  textGroup
    .attr("transform","translate("+example.layout.textTranslateX+","+yPosition+")")

  return textGroup;
}
