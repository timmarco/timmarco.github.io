ScrollManager.prototype.triggerEvent = function(eventName) {
  const manager = this;

  if(eventName in manager.scrollEvents) {
    manager.scrollEvents[eventName]();
  } else {
  }

}
