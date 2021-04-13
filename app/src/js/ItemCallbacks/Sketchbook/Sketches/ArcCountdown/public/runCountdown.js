ArcCountdown.prototype.runCountdown = function() {
  const countdown = this;

  return () => {

    const startValue = +countdown.text.html();

    [countdown.text,countdown.textOutline]
      .forEach((element) => {
        element
          .transition()
          .duration(countdown.fullDuration)
          .ease(countdown.easeType)
          .textTween(numberTween())
      });

    countdown.arc
      .transition()
      .duration(countdown.fullDuration)
      .ease(countdown.easeType)
      .attrTween("d",arcTween(0));

    function numberTween() {
      return function() {
        const interpolate = d3.interpolate(countdown.maxValue,0)
        return function(time) {
          return Math.floor(interpolate(time));
        }
      }
    }


    function arcTween(newAngle) {
      return function() {
        const interpolateValue = d3.interpolate(Math.PI,newAngle);
        return function(time) {
          return countdown.arcGenerator
            .innerRadius(countdown.arcScales.innerRadius(time))
            .outerRadius(countdown.arcScales.outerRadius(time))
            .endAngle(interpolateValue(time))();
        }
      }
    }

  }
}
