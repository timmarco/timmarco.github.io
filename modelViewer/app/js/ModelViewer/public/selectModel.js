ModelViewer.prototype.selectModel = function(model) {
  const viewer = this;

  if(!viewer.hasTransitionedIn) {
      d3.select("canvas")
        .transition()
        .duration(500)
        .style("top","0px")
        .on('end',function(){
          viewer.currentModelPath = model.gltfPath;
          viewer.updateModel(model);
          d3.select("#splashContent").html("");
        });
      viewer.hasTransitionedIn = true;

      viewer.dragCallout
        .transition()
        .delay(750)
        .duration(550)
        .ease(d3.easeBack)
        .style("bottom","2.5vh");

  } else {
    if(viewer.currentModelPath != model.gltfPath)  {
      viewer.currentModelPath = model.gltfPath;
      viewer.updateModel(model);
    }
  }

  return viewer;
}
