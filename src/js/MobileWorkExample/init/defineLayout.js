MobileWorkExample.prototype.defineLayout = function() {
  const example = this;

  const layout = {};

  layout.size = {};
  layout.size.width = window.innerWidth * 0.9;
  layout.size.height = window.innerHeight * 0.75;

  return layout;
}
