ModelThumbnail.prototype.layoutHeadline = function() {
  const thumbnail = this;

  let runningY = 0;
  thumbnail.headlines.forEach((group,index) => {
    const groupHeight = group.node().getBBox().height;

    group
      .attr("transform","translate(0,"+runningY+")");

    runningY += groupHeight;
  });


  thumbnail.layers.headlineOffset
    .attr("transform","translate("+thumbnail.layout.padding.left+","+thumbnail.layout.padding.top+")");

  return thumbnail;
}
