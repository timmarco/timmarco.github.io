/* global CartesianFunction */
/* global d3 */
CartesianFunction.prototype.update = function() {
  const plottedFunction = this;
  const plot = plottedFunction.plot;

  let line;
  let samples;

  samples = getSamples();
  line = defineLine();

  plottedFunction.path
    .attr("d",line(samples));

  return plottedFunction;

  function defineLine() {
    let line;

    line = d3.line()
      .x((d) => { return plot.xScale(d.input); })
      .y((d) => { return plot.yScale(d.output); });

    return line;
  }

  function getSamples() {
    let sampleData,
      sampleInputs,
      sampleStep;

    sampleData = [];
    sampleStep = (plot.range[1] - plot.range[0]) / plot.sampleResolution;
    sampleInputs = d3.range(plot.range[0],plot.range[1],sampleStep);

    sampleInputs.forEach((inputValue) => {
      let sample;

      sample = {};
      sample.input = inputValue;
      sample.output = plottedFunction.function(inputValue);

      if(isFinite(sample.output)) {
        sampleData.push(sample);
      }
    });

    return sampleData;
  }
};
