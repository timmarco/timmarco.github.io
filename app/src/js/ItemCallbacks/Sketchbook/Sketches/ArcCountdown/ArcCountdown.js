function ArcCountdown(where) {
  const countdown = this;
  init(where);
  return countdown;

  function init(where) {
    countdown.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(countdown.runCountdown())
      .UnhighlightEventIs(countdown.pauseCountdown());


    countdown.maxValue = 100;
    countdown.fullDuration = 2000;
    countdown.easeType = d3.easeQuadOut;
    countdown.arcCentralRadius = 115;
    countdown.arcRadiusWidth = 30;
    countdown.backgroundColor = d3.schemeCategory10[0];
    countdown.foregroundColor = d3.schemeCategory10[1];
    countdown.frameColor = "#444";
    countdown.textOutlineWidth = 5;

    countdown.arcGenerator = countdown.defineArcGenerator();
    countdown.arcScales = countdown.defineArcScales();
    countdown.background = countdown.addBackground();
    countdown.group = countdown.addGroup();
    countdown.arcGroup = countdown.addArcGroup();
    countdown.textOutline = countdown.addTextOutline();
    countdown.text = countdown.addText();
    countdown.arcOutline = countdown.addArcOutline();
    countdown.arc = countdown.addArc();

    countdown.hotspot = countdown.addHotspot();

    countdown.initialize();
  }
}
