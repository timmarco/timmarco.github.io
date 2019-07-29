/* jshint esversion:6 */
CatcherView.prototype.switchPerspective = function(perspective) {
  const view = this;

  if(perspective === "catcher") {
    view.player.isInverted = false;

    view.scales.x
      .domain([-3,3]);

      view.leftBoxLabel
        .html("LHB Batter's Box &rarr;");

      view.rightBoxLabel
        .html("&larr; RHB Batter's Box");

    let hpPoints = [
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(-4.25/12)},
      {"x":view.scales.x(0),"y":view.scales.y(-8.5/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(-4.25/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
    ];

    view.homePlate
      .datum(hpPoints)
      .attr("d",view.homePlatePathGen);
  }

  if(perspective === "pitcher") {
    view.player.isInverted = true;
    view.scales.x
      .domain([3,-3]);

    view.leftBoxLabel
      .html("RHB Batter's Box &rarr;");

    view.rightBoxLabel
      .html("&larr; LHB Batter's Box");

    let hpPoints = [
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
      {"x":view.scales.x(8.5/12),"y":view.scales.y(4.25/12)},
      {"x":view.scales.x(0),"y":view.scales.y(8.5/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(4.25/12)},
      {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
    ];

    view.homePlate
      .datum(hpPoints)
      .attr("d",view.homePlatePathGen);

  }

  view.pitchCircles
    .attr("cx",(d) => { return view.scales.x(d.pX) ;});

  view
    .updateActive();


  return view;
};
