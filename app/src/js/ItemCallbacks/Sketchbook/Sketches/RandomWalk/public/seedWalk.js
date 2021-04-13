RandomWalk.prototype.seedWalk = function() {
  const randomWalk = this;

  if(!randomWalk.isActive) { return }
  const value = Math.random();
  const stepChange = value < 0.5 ? 1 : - 1;
  const newValue = randomWalk.history[randomWalk.history.length - 1] + stepChange;

  randomWalk.steps += 1;

  if(newValue < randomWalk.minValue) {
    randomWalk.minValue = newValue
  }

  if(newValue > randomWalk.maxValue) {
    randomWalk.maxValue = newValue;
  }

  const bound = d3.max([Math.abs(randomWalk.minValue),Math.abs(randomWalk.maxValue)]);

  if(2 * bound + 1 != Object.keys(randomWalk.binnedValues).length) {
    randomWalk.binnedValues[bound] = 0;
    randomWalk.binnedValues[-bound] = 0;
  }

  randomWalk.binnedValues[newValue] += 1;

  randomWalk.walkScales.histogram
    .domain([0,d3.max(Object.values(randomWalk.binnedValues))]);

  const histogramGenerator = d3.area()
    .x0((datum) => {
      return randomWalk.walkScales.histogram(0)
    })
    .x1((datum) => { return randomWalk.walkScales.histogram(randomWalk.binnedValues[datum]) })
    .y((datum,index) => { return randomWalk.walkScales.y(datum) });

  randomWalk.histogram
    .attr("d",histogramGenerator(Object.keys(randomWalk.binnedValues).sort((a,b) => { return b-a})));

  randomWalk.walkScales.y
    .domain([-bound,bound]);


  if(randomWalk.history.length == 100) {
    randomWalk.history
      .shift();
  }

  randomWalk.history
    .push(newValue);

  const lineGenerator = d3.line()
    .x((datum,index) => { return randomWalk.walkScales.x(index)})
    .y((datum) => { return randomWalk.walkScales.y(datum)});


  randomWalk.line
    .attr("d",lineGenerator(randomWalk.history.slice(0,randomWalk.history.length - 1)))
    .transition()
    .duration(10)
    .attr("d",lineGenerator(randomWalk.history))
    .on("end",() => {
      randomWalk.seedWalk();
    });


}
