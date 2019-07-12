/* global FunctionPlotter */
FunctionPlotter.prototype.mouseout = function() {
  return () => {
    console.log("MOUSEOUT");
  };
};
