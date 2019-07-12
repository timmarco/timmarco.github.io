/* jshint esversion: 6 */
LineChart.prototype.addCompData = function(data) {
  const chart = this;

  chart.compPlayers = data;
  chart.compLines = [];
  chart.compCircles = [];
  chart.textLabels = [];

  let allBWarValues = [];
  let allAges = [];

  data.forEach((player) => {
    let group;
    let line;
    let mouseLine;
    let circles;
    let textLabels = [];
    let nameLabel;

    player.bWar.forEach((year) => {
      allBWarValues.push(year.bWar);
      allAges.push(year.age);
    });

    chart
      .updateYScale(d3.extent(allBWarValues))
      .updateXScale(d3.extent(allAges));



    group = chart.layers.backgroundLine
      .append("g")
      .on('mouseenter',function(d,i) {
        let element = line;
        let name = element.attr("data-name");
        element
          .attr("stroke",chart.styles.compPlayerHighlightStroke);

        nameLabel.show();
        textLabels.forEach((label) => {
          label.show();
        });


        circles.attr("fill","steelblue");
      })
      .on('mouseleave',function(d,i) {
        let element = line;

        element
          .attr("stroke","#ddd");

        circles.attr("fill",chart.styles.compPlayerStroke);

        textLabels.forEach((label) => {
          label.hide();
        });
        nameLabel.hide();

      });



    line = group
      .append("path")
      .attr("fill","none")
      .attr("stroke",chart.styles.compPlayerStroke)
      .attr("stroke-width",chart.styles.compPlayerStrokeWidth)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer")
      .attr("data-name",player.name)
      .attr("data-labels",textLabels);

    mouseline = group
      .append("path")
      .attr("fill","none")
      .attr("stroke","rgba(0,0,0,0)")
      .attr("stroke-width",8)
      .datum(player.bWar)
      .attr("d",chart.lineGenerator)
      .attr("cursor","pointer");


    circles = group
      .selectAll("circle")
      .data(player.bWar)
      .enter()
      .append("circle")
      .attr("data-name",player.name)
      .attr("cx",(d) => { return chart.scales.x(d.age); })
      .attr("cy",(d) => { return chart.scales.y(d.bWar); })
      .attr("r",2)
      .attr("fill","#ddd")
      .attr("cursor","pointer");



    player.bWar.forEach((year) => {

      let textLabel = new TextLabel({
        "text":year.bWar.toFixed(1),
        "where":group,
        "values":{"x":year.age,"y":year.bWar},
        "foregroundColor":"#3caea3",
      })
      .move({
        "x":chart.scales.x(year.age),
        "y":chart.scales.y(year.bWar)
      });
      textLabels.push(textLabel);
      chart.textLabels.push(textLabel);


    });

    nameLabel = new TextLabel({
      "text":player.name,
      "where":group,
      "values":{"x":player.bWar[player.bWar.length - 1].age - 0.5,"y":player.bWar[player.bWar.length - 1].bWar},
      "foregroundColor":"#3caea3",
      "backgroundColor":"black",
      "textAnchor":"start"
    })
    .move({
      "x":chart.scales.x(player.bWar[player.bWar.length - 1].age) + 100,
      "y":chart.scales.y(player.bWar[player.bWar.length - 1].bWar)
    });
    chart.textLabels.push(nameLabel);

    chart.compLines.push(line);
    chart.compLines.push(mouseline);
    chart.compCircles.push(circles);

  });



  return chart;
};
