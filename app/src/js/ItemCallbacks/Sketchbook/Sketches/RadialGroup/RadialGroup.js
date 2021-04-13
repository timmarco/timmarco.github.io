function RadialGroup(where) {
  const radial = this;
  init(where);
  return radial;

  function init(where) {

    radial.radius = 100;
    radial.outerRadius = 150;
    radial.state = "inactive";

    radial.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(radial.growPreview())
      .UnhighlightEventIs(radial.reset());


    radial.defs = radial.addDefs();
    radial.gradient = radial.addGradient();
    radial.background = radial.addBackground();
    radial.group = radial.addGroup();
    radial.wedges = radial.addWedges();
    radial.circle = radial.addCircle();
    radial.hotspot = radial.addHotspot();

  }
}
