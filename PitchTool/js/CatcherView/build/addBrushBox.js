/* jshint esversion:6 */
CatcherView.prototype.addBrushBox = function() {
  const view = this;

  let box = new BrushBox({
    "where":view.layers.brush,
    "size":{
      "width":500,
      "height":500
    },
    "callbacks":{
      "dragStart":() => {
        view.layers.pitchCircles
          .transition()
          .duration(275)
          .attr("opacity",0.75);

        view.layers.activeCircles
          .selectAll("*")
          .remove();

      },
      "dragEnd":() => {
        view.layers.pitchCircles
          .transition()
          .duration(275)
          .attr("opacity",0);
      },
      "valueChanged":(info) => {
        let minX = view.scales.x.invert(info.coordinates.x);
        let maxX = view.scales.x.invert(info.coordinates.x + info.size.width);
        let maxY = view.scales.y.invert(info.coordinates.y);
        let minY = view.scales.y.invert(info.coordinates.y + info.size.height);

        view.player
          .filterByRegion({
            "minX":minX,
            "maxX":maxX,
            "minY":minY,
            "maxY":maxY
          });

      }
    }
  });

  function summarize(data,key) {
    let summary = d3.nest()
        .key((d) => { return d[key]; })
        .rollup((d) => { return d.length; })
        .entries(data)
        .sort((a,b) => { return b.value - a.value; });

    return summary;
  }


  return box;
};
