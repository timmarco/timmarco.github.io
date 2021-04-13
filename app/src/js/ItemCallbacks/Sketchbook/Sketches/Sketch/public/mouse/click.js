Sketch.prototype.click = function() {
  const sketch = this;
  return () => {
    sketch
      .clickCallback();
  }
}
