ModelControls.prototype.addZoom = function() {
  const controls = this;

  const zoom = new ModelControlSlider({
    "parent":controls,
    "size":{
      "width":500,
      "height":50
    },
    "callback":function(value) {
      controls.parent.threeContainer
        .zoom(value);
    }
  });

  return zoom;
}
