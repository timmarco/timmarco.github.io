ArcCountdown.prototype.initialize = function() {
  const countdown = this;

  countdown.arcGenerator
    .startAngle(0)
    .endAngle(Math.PI);


  [countdown.arc,countdown.arcOutline]
    .forEach((arc) => {
      arc
        .attr("d",
          countdown.arcGenerator
            .innerRadius(countdown.arcScales.innerRadius(0))
            .outerRadius(countdown.arcScales.outerRadius(0))
        );
    });

  [countdown.textOutline,countdown.text]
    .forEach((textElement) => {
      textElement
        .html(countdown.maxValue);
    });
}
