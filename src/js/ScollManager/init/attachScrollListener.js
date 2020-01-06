ScrollManager.prototype.attachScrollListener = function() {
  const manager = this;

  window.addEventListener('scroll',manager.scrollMethod());


}
