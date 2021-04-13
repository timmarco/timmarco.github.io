function RadarSketch(where) {
  const radar = this;
  init(where);
  return radar;

  function init(where) {
    radar.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(radar.highlight())
      .UnhighlightEventIs(radar.unhighlight());

    radar.backgroundRectElement = radar.addBackground();

    radar.green = "#00ff00";
    radar.scanLineColor = "#eeffee"
    radar.wedgeSize = -45;

    radar.defs = radar.addDefs();
    radar.wedgeGradient = radar.addWedgeGradient();

    radar.translateGroup = radar.addTranslateGroup();
    radar.rotateGroup = radar.addRotateGroup();
    radar.group = radar.addGroup();
    radar.bogeyGroup = radar.addBogeyGroup();

    radar.reticle = radar.addReticle();
    radar.rangeCircles = radar.addRangeCircles();
    radar.polarLines = radar.addPolarLines();
    radar.scanWedge = radar.addScanWedge();
    radar.scanLine = radar.addScanLine();
    radar.bogeys = radar.addBogeys();
    radar.hotspot = radar.addHotspot();


  }

}
