function activateSketchbook(where) {

  const item = new PortfolioItemContent(where)
    .vimeo("524922093","app/assets/previews/sketchbookPreview.jpeg");

  const loadingSvg = item.descriptionDiv
    .append("svg")
    .attr("id","sketchbookLoading")
    .style("width","100%")
    .style("min-height","400px");

  const boundingRect = loadingSvg
    .node()
    .getBoundingClientRect();

  const xTransform = boundingRect.width / 2;
  const yTransform = boundingRect.height / 2;

  const loadingGroup = loadingSvg
    .append("g")
    .attr("transform","translate("+xTransform+","+yTransform+")");

  let data = [];
  d3.range(0,9)
    .forEach((datum) => {
      const relative = datum  / 9;
      const theta = 2 * Math.PI * relative - Math.PI / 2;
      data.push({
        "index":datum,
        "theta":theta
      });
    });


  const outlines = loadingGroup
    .selectAll(".outline")
    .data(data)
    .enter()
    .append("circle")
    .attr("r",10)
    .attr("cx",(datum) => { return Math.cos(datum.theta) * 100})
    .attr("cy",(datum) => { return Math.sin(datum.theta) * 100})
    .attr("fill","none")
    .attr("stroke","#ccc")
    .attr("stroke-width",2);


  const circles = loadingGroup
    .selectAll(".circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r",0)
    .attr("cx",(datum) => { return Math.cos(datum.theta) * 100})
    .attr("cy",(datum) => { return Math.sin(datum.theta) * 100})
    .attr("fill","rgba(60,144,60)")
    .attr("stroke","none");

  runCircles();

  function runCircles() {
    circles
      .transition()
      .duration(500)
      .delay((datum,index) => { return index * 50})
      .attr("r",15)
      .transition()
      .duration(325)
      .attr("r",0)
      .on("end",(datum,index) => {
        if(index === 8) {
          runCircles();
        }
      })
  }



  return item;

}
