function Sketch(where) {
  const sketch = this;
  init(where);
  return sketch;

  function init(where) {
    sketch.where = where;

    sketch.mouseoverCallback = () => {};
    sketch.mouseoutCallback = () => {};
    sketch.clickCallback = () => {};

    sketch.div = sketch.addDiv();
    sketch.image = sketch.addImage();
  }
}
