MobileWorkExample.prototype.addSwipeImage = function() {
  const example = this;

  // const swipeDiv = example.swipeContainer
  //     .append("div");

  const fullPath = "assets/mobileImages/" + example.imagePath;

  const link = d3.select("#exampleContainer")
    .append("a")
    .attr("target","_new")
    .attr("href",example.href);

  const swipeImage = link
      .append("img")
      .style("width","100%")
      .attr("src",fullPath);



  return swipeImage;
}
