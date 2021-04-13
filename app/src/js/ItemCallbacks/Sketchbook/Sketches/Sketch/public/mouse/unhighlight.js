Sketch.prototype.unhighlight = function() {
  const sketch = this;
  return () => {
    sketch
      .mouseoutCallback();
  }
}
