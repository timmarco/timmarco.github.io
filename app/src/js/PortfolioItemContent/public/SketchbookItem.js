PortfolioItemContent.prototype.SketchbookItem = function(manifest) {
  const content = this;

  const itemContainer = content.descriptionDiv
    .append("div")
    .classed("sketchbook-item",true);

  if(manifest.type === "video") {

    const url = "https://player.vimeo.com/video/"+manifest.id+"?color=000000&title=0&byline=0&portrait=0"

    const videoContainer = itemContainer
      .append("div")
      .style("width","640px")
      .style("height","360px");

    const iframe = videoContainer
      .append("iframe")
      .attr("src",url)
      .attr("allow","autoplay; fullscreen; picture-in-picture")
      .attr("allowfullscreen","true")
      .attr("autoplay",true)
      .style("width","640px")
      .style("height","360px");

    const itemText = itemContainer
      .append("div")
      .style("margin-left","2em")
      .style("margin-right","2em")
      .style("height","360px")
      .style("overflow-y","scroll");

    itemText
      .append("h2")
      .html(manifest.title)

    itemText
      .append("div")
      .classed("sketchbook-item-text",true)
      .html(manifest.notes);
  }

  if(manifest.type === "interactive") {

    const svgDiv = itemContainer
      .append("div")
      .style("width","640px")
      .style("height","360px");

    new manifest
      .callback(svgDiv);

    const itemText = itemContainer
      .append("div")
      .style("margin-left","2em")
      .style("margin-right","2em")
      .style("height","360px")
      .style("overflow-y","scroll");

    itemText
      .append("h2")
      .html(manifest.title)

    itemText
      .append("div")
      .classed("sketchbook-item-text",true)
      .html(manifest.notes);

  }

  return content;
}
