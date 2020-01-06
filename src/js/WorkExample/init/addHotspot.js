WorkExample.prototype.addHotSpot = function() {
  const example = this;

  const anchor = example.layers.hotspot
    .append("a")
    .attr("xlink:href",example.href)
    .attr("target","_new");

  const hotspot = anchor
    .append("rect")
    .attr("width",example.layout.size.width)
    .attr("height",example.layout.size.height)
    .attr("fill","rgba(0,0,0,0)")

  if(!example.parent.browserInfo.isMobile) {
    hotspot
    .on('mouseover',example.highlight())
    .on('mouseout',example.unhighlight());
  }

  return hotspot;
}
