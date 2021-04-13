RandomWalk.prototype.highlight = function() {
  const randomWalk = this;
  return () => {
    randomWalk.isActive = true;
    randomWalk
      .seedWalk();
    return randomWalk;
  }
}
