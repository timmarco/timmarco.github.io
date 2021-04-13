function SnellsLaw(where) {
  const snells = this;
  init(where);
  return snells;

  function init(where) {
    snells.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(snells.highlight())
      .UnhighlightEventIs(snells.unhighlight());

    snells.firstIndexOfRefraction = 1;
    snells.secondIndexOfRefraction = 1.5;

    snells.background = snells.addBackground();
    snells.water = snells.addWater();
    snells.arcGenerator = snells.defineArcGenerator();

    snells.normal = snells.addNormal();
    snells.source = snells.addSource();
    snells.incidentRay = snells.addIncidentRay();
    snells.incidentArc = snells.addIncidentArc();
    snells.refractedArc = snells.addRefractedArc();
    snells.refractedRay = snells.addRefractedRay();
    snells.refractedImage = snells.addRefractedImage();

    snells.hotspot = snells.addHotspot();

    snells
      .updateForMouseCoordinates({"x":50,"y":40});


  }
}
