MobileWorkExample.prototype.addHeadline = function() {
  const example = this;

  const group = example.layers.headline
    .append("g");


  const textLines = [];

  example.text.forEach((lineOfText) => {

    const lineGroup = group.append("g");

    const background = lineGroup
      .append("rect")
      .attr("fill","black")
      .attr("x",0)
      .attr("y",0);

    const text = lineGroup
      .append("text")
      .attr("font-family","Oswald")
      .attr("font-weight",500)
      .attr("fill","white")
      .attr("dx",10)
      .attr("font-size","4em")
      .attr("dominant-baseline","text-before-edge")
      .text(lineOfText);

    const textSize = text
      .node()
      .getBBox();

    background
      .attr("width",textSize.width + 20)
      .attr("height",textSize.height);

    textLines
      .push(lineGroup);

  });

  let runningHeight = 0;

  textLines.forEach((group) => {
    const height = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningHeight+")");

    runningHeight += height;
  });

  const leftAlign = example.layout.size.width * 0.125;
  const topAlign = example.layout.size.height * 0.25;

  group
    .attr("transform","translate("+leftAlign+","+topAlign+")");


  return group;
}
