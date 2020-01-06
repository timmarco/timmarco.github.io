ScrollManager.prototype.scrollMethod = function() {
  return () => {
    const manager = this;

    const scrollPosition = window.scrollY + window.innerHeight - manager.scrollOffset;
    const triggerPositions = Object.keys(manager.triggerPoints).map((point) => { return +point; });

    let current;
    let next;

    triggerPositions.forEach((position) => {
      if(scrollPosition >= position) {
        current = position;
      }
    });

    if(current) {
      manager.triggerEvent(manager.triggerPoints[current]);
    }

  }

}
