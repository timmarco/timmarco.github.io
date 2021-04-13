Sketch.prototype.HighlightEventIs = function(callback) {
  const sketch = this;
  sketch.mouseoverCallback = callback;
  return sketch;
}
