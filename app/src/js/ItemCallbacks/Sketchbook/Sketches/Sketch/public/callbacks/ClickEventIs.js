Sketch.prototype.ClickEventIs = function(callback) {
  const sketch = this;
  sketch.clickCallback = callback;
  return sketch;
}
