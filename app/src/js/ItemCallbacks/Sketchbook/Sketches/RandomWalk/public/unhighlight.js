RandomWalk.prototype.unhighlight = function() {
  const randomWalk = this;
  return () => {
    randomWalk.isActive = false;
    return randomWalk;
  }
}
