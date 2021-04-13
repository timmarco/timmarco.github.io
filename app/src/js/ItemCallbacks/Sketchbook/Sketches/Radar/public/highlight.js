RadarSketch.prototype.highlight = function() {
  const radar = this;
  return () => {
    radar
      .singleSweep();
  }
}
