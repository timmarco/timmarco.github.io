/* jshint esversion:6 */
ModelerPane.prototype.hintMouseout = function() {
  return () => {
    const pane = this;

    pane.tooltip
      .hide();
      
    return pane;
  };
};
