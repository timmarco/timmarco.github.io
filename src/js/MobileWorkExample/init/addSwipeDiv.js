MobileWorkExample.prototype.addSwipeDiv = function() {
  const example = this;

  const swipeDiv = example.parent.swipeContainer
      .append("div")
      .style("background-color","red")
      .classed("swipe-wrap",true);

  const fullPath = "assets/mobileImages/" + example.imagePath;

  const swipeImage = swipeDiv
      .append("img")
      .attr("src",fullPath);


  return swipeDiv;
}
