/* jshint esversion:6 */
CatcherView.prototype.switchPerspective = function(perspective) {
  const view = this;

  if(perspective === "catcher") {
    view.player.isInverted = false;

    view.scales.x
      .domain([-3,3]);

      view.leftBoxLabel
        .html("RHB Batter's Box &rarr;");

      view.rightBoxLabel
        .html("&larr; LHB Batter's Box");

  }

  if(perspective === "pitcher") {
    view.player.isInverted = true;
    view.scales.x
      .domain([3,-3]);

    view.leftBoxLabel
      .html("LHB Batter's Box &rarr;");

    view.rightBoxLabel
      .html("&larr; RHB Batter's Box");
  }

  view.pitchCircles
    .attr("cx",(d) => { return view.scales.x(d.pX) ;});

  view
    .updateActive();


  return view;
};
