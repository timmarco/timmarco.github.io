/* jshint esversion:6 */
function CatcherView(options) {
  const view = this;
  init(options);
  return view;

  function init(options) {
    view.player = options.player;
    view.where = options.where;


    view.size = view.defineSize(options);
    view.scales = view.defineScales(options);

    view.group = view.addGroup();
    view.layers = view.addLayers();

    view.group
      .attr("transform","translate(100,50)");

    view.brushBox = view.addBrushBox();

    view.yAxis = d3.axisLeft(view.scales.y);
    view.yAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,0)")
      .call(view.yAxis);

    view.xAxis = d3.axisBottom(view.scales.x);
    view.xAxisGroup = view.layers.axis
      .append("g")
      .attr("transform","translate(0,500)")
      .call(view.xAxis)
      .attr("font-family","Source Sans Pro");

      let hpPoints = [
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)},
        {"x":view.scales.x(8.5/12),"y":view.scales.y(0)},
        {"x":view.scales.x(8.5/12),"y":view.scales.y(-4.25/12)},
        {"x":view.scales.x(0),"y":view.scales.y(-8.5/12)},
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(-4.25/12)},
        {"x":view.scales.x(-8.5/12),"y":view.scales.y(0)}
      ];

      let pathGen = d3.line().x((d) => { return d.x; }).y((d) => { return d.y;});

    let homePlate = view.layers.axis
      .append("path")
      .datum(hpPoints)
      .attr("stroke","black")
      .attr("fill","white")
      .attr("stroke-width",2)
      .attr("d",pathGen);


    view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(0))
      .attr("dy",-5)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","8pt")
      .attr("font-weight","bold")
      .html("&larr; Distance (feet) &rarr;");

    view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(0))
      .attr("dy",30)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .text("Home Plate");

    view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(2))
      .attr("dy",30)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .html("LHB Batter's Box &rarr;");

    view.layers.axis
      .append("text")
      .attr("y",view.scales.y(0))
      .attr("x",view.scales.x(-2))
      .attr("dy",30)
      .attr("text-anchor","middle")
      .attr("dominant-baseline","baseline")
      .attr("font-size","10pt")
      .attr("font-weight","bold")
      .html("&larr; RHB Batter's Box");

    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(-3))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[0]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(-3))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Balls");


    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(-1.5))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[1]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(-1.5))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Strikes");

    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(0))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[2]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(0))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Hits");


    view.layers.axis
      .append("rect")
      .attr("x",view.scales.x(1.5))
      .attr("y",view.scales.y(0) + 75)
      .attr("width",10)
      .attr("height",10)
      .attr("fill",d3.schemeCategory10[3]);

    view.layers.axis
      .append("text")
      .attr("x",view.scales.x(1.5))
      .attr("y",view.scales.y(0) + 80)
      .attr("dx",15)
      .attr("text-anchor","start")
      .attr("dominant-baseline","middle")
      .attr("font-size","12px")
      .text("Outs");

  }
}
