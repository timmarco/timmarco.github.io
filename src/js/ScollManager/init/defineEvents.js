ScrollManager.prototype.defineEvents = function() {
  const manager = this;

  const events = {};

  events.resume = () => {
    manager.parent.timeline
      .animateIn();
  }



  return events;
}
