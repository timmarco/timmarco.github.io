TimApp.prototype.addExampleSwipes = function() {
  const app = this;

  const container = d3.select("#exampleContainer")
    .append("div")
    .attr("id","swipeContainer")
    .style("overflow","hidden")
    .style("visibility","hidden")
    .style("position","relative");

  const swipeWrap = container
    .append("div")
    .style("overflow","hidden")
    .style("position","relative");

  swipeWrap
    .append("div")
    .style("float","left")
    .style("width","100%")
    .style("position","relative")
    .style("overflow","hidden");

  app.swipe = new Swipe(container.node(),{
    "callback":(index) => {
      app.swipeIndicator.update(index);
    }
  });


  return swipeWrap;
}
