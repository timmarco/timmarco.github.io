Sketch.prototype.highlight = function() {
  const sketch = this;
  return () => {
    sketch
      .mouseoverCallback();
  }
}
