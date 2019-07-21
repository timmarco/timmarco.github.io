/* jshint esversion:6*/
Numberline.prototype.setBackgroundCircleMouseout = function() {
  const chart = this;

  chart.backgroundCircleMouseout = (circle,datum) => {

    chart
      .hideHighlight();

    chart
      .tooltip
      .hide();
  };

};
