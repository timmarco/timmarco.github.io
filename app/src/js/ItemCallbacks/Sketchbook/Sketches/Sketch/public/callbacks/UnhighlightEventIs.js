Sketch.prototype.UnhighlightEventIs = function(callback) {
  const sketch = this;
  sketch.mouseoutCallback = callback;
  return sketch;
}
