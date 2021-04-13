function BlurAttentionSketch(where) {
  const blur = this;
  init(where);
  return blur;

  function init(where) {

    blur.sketch = new Sketch(where)
      .AddSvg()
      .HighlightEventIs(blur.highlight())
      .UnhighlightEventIs(blur.unhighlight())
      .ClickEventIs(blur.click());

    blur.backgroundRect = blur.addBackgroundRect();
    blur.defs = blur.addDefs();
    blur.filter = blur.addFilter();
    blur.gaussian = blur.addGaussian();
    blur.grid = blur.addGrid();
    blur.buttonGroup = blur.addButtonGroup();
    blur.buttons = blur.addButtons();

  }
}
