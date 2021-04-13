function RandomWalk(where) {
  const randomWalk = this;
  init(where);
  return randomWalk;

  function init(where) {
    randomWalk.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(randomWalk.highlight())
      .UnhighlightEventIs(randomWalk.unhighlight());

    randomWalk.hasStarted = false;
    randomWalk.isActive = false;
    randomWalk.history = [0];
    randomWalk.steps = 0;
    randomWalk.minValue = -10;
    randomWalk.maxValue = 10;
    randomWalk.binnedValues = randomWalk.defineBinnedValues();
    randomWalk.isWalking = false;
    randomWalk.background = randomWalk.addBackground();
    randomWalk.walkScales = randomWalk.defineWalkScales();
    randomWalk.xAxisGroup = randomWalk.addXAxisGroup();
    randomWalk.xAxis = randomWalk.addXAxis();
    randomWalk.lineGroup = randomWalk.addLineGroup();
    randomWalk.line = randomWalk.addLine();
    randomWalk.xAxisGroup.selectAll("text").remove();
    randomWalk.histogram = randomWalk.addHistogram();


  }
}
