RandomWalk.prototype.defineWalkScales = function() {
  const randomwWalk = this;
  const scales = {};

  scales.x = d3.scaleLinear()
    .domain([0,100])
    .range([25,500]);

  scales.histogram = d3.scaleLinear()
    .domain([0,1])
    .range([515,550]);

  scales.y = d3.scaleLinear()
    .domain([-10,10])
    .range([335,25]);

  return scales;
}
