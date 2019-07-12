/* exported CartesianFunction */
function CartesianFunction(options) {
  const plottedFunction = this;

  init(options);

  return plottedFunction;

  function init(options) {
    plottedFunction.options = options;

    _required();
    _defaults();

    plottedFunction
      .addPath()
      .update();

  }

  function _required() {
    plottedFunction.plot = options.plot;
    plottedFunction.function = options.function;
  }

  function _defaults() {

    plottedFunction
      .defaulter("stroke","blue")
      .defaulter("strokeWidth",2)
      .defaulter("strokeDashArray","1,0");

  }
}

/* exported CartesianPlot */
function CartesianPlot(options) {
  let plot = this;

  init(options);

  return plot;

  function init(options) {
    plot.options = options;

    _required();
    _defaults();

    plot
      .addSvg()
      .addGridGroup()
      .addAxisGroup()
      .addFunctionGroup()
      .defineXScale()
      .defineYScale()
      .addXAxis()
      .addYAxis()
      .addGrids();

  }

  function _defaults() {

    plot
      .defaulter("width",500)
      .defaulter("height",500)
      .defaulter("range",[-10,10])
      .defaulter("domain",[-10,10])
      .defaulter("marginLeft",25)
      .defaulter("marginRight",25)
      .defaulter("marginTop",25)
      .defaulter("marginBottom",25)
      .defaulter("xAxisTicks",5)
      .defaulter("yAxisTicks",5)
      .defaulter("plottedFunctions",[])
      .defaulter("sampleResolution",1000);

  }

  function _required() {
    plot.where = plot.options.where;
  }



}

/* exported FunctionPlotter */
function FunctionPlotter(options) {
  const plotter = this;

  init(options);

  return plotter;

  function init(options) {

    plotter.options = options;
    _required();
    _defaults();

    plotter
      .addSvg()
      .addAxis()
      .defineXScale()
      .addInputLabel()
      .addOutputLabel()
      .addTitle();
  }


  function _required() {

    plotter.where = plotter.options.where;

  }

  function _defaults() {

    plotter
      .defaulter("interactive",true)
      .defaulter("lineHeight",100)
      .defaulter("domain",[-10,10])
      .defaulter("height",200)
      .defaulter("width",800)
      .defaulter("margins",{"left":50,"top":20,"bottom":20,"right":50})
      .defaulter("functions",[])
      .defaulter("fontFamily","Oswald")
      .defaulter("fontColor","#000033")
      .defaulter("samples",20)
      .defaulter("sampleColor","#eee")
      .defaulter("titleString","")
      .defaulter("isDiscrete",false);

    plotter.range = [plotter.margins.left,plotter.width - plotter.margins.right];

  }

}

/* exported FunctionPlotterInput */
function FunctionPlotterInput(options) {
  const input = this;

  init(options);

  return input;

  function init(options) {
    input.options = options;

    _required();
    _defaults();


    input
      .addTransformLine();

    if(input.isDiscrete) {
      input
        .addInputCircle()
        .addOutputCircle()
        .addInputText()
        .addOutputText();
    }
  }

  function _required() {
    input.parent = options.parent;
    input.plotter = input.parent.parent;
    input.data = options.data;
  }

  function _defaults() {
    input
      .defaulter("r",4)
      .defaulter("stroke","none")
      .defaulter("strokeWidth",0)
      .defaulter("fill","blue")
      .defaulter("lineStroke","rgba(0,0,0,0.125)")
      .defaulter("lineStrokeWidth",1)
      .defaulter("highlightFill","orange")
      .defaulter("highlightRadius",5)
      .defaulter("textSize","10pt")
      .defaulter("textForeground","orange")
      .defaulter("textBackground","white")
      .defaulter("textOutline",3)
      .defaulter("isDiscrete",false);
  }
}

/* exported FunctionStep */
function FunctionStep(options) {
  const functionStep = this;

  init(options);

  return functionStep;

  function init(options) {
    functionStep.options = options;

    _required();
    _defaults();

    functionStep
      .createGroup()
      .inputAxis()
      .outputAxis()
      .sampleValues()
      .addHighlight();

  }

  function _required() {

    functionStep.parent = options.parent;
    functionStep.inputs = [];

  }

  function _defaults() {

    functionStep
      .defaulter("range",[-100,100])
      .defaulter("y",50)
      .defaulter("x",0)
      .defaulter("height",50)
      .defaulter("sampleCount",20)
      .defaulter("functionToPlot",(x) => { return x;})
      .defaulter("stroke","rgba(0,0,0,0.125)")
      .defaulter("strokeWidth",1);

  }
}

/* global CartesianFunction */
CartesianFunction.prototype.addPath = function() {
  const plottedFunction = this;

  plottedFunction.path = plottedFunction.plot.functionGroup
    .append("path")
    .attr("stroke",plottedFunction.stroke)
    .attr("stroke-width",plottedFunction.strokeWidth)
    .attr("stroke-dasharray",plottedFunction.strokeDashArray)
    .attr("fill","none");

  return plottedFunction;
};

/* global CartesianFunction */
CartesianFunction.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] ? plotter.options[key] : defaultValue;

  return plotter;
};

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

/* global CartesianPlot */
CartesianPlot.prototype.addAxisGroup = function() {
  const plot = this;

  plot.axisGroup = plot.svg
    .append("g")
    .attr("id","axis");

  return plot;
};

/* global CartesianPlot */
CartesianPlot.prototype.addFunctionGroup = function() {
  const plot = this;

  plot.functionGroup = plot.svg
    .append("g")
    .attr("id","functions");

  return plot;
};

/* global CartesianPlot */
CartesianPlot.prototype.addGridGroup = function() {
  const plot = this;

  plot.gridGroup = plot.svg
    .append("g")
    .attr("id","grid");

  return plot;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addGrids = function() {
  const plot = this;

  plot.xGrid = plot.gridGroup
    .append("g")
    .attr("id","xGrid");

  plot.yGrid = plot.gridGroup
    .append("g")
    .attr("id","yGrid");

  plot.xGrid
    .selectAll("line")
    .data(d3.range(plot.domain[0],plot.domain[1] + 1))
    .enter()
    .append("line")
    .attr("x1",(datum) => { return plot.xScale(datum); })
    .attr("x2",(datum) => { return plot.xScale(datum); })
    .attr("y1",plot.marginTop)
    .attr("y2",plot.height - plot.marginBottom)
    .attr("stroke","#aaa")
    .attr("stroke-width",1);

  plot.yGrid
    .selectAll("line")
    .data(d3.range(plot.range[0],plot.range[1] + 1))
    .enter()
    .append("line")
    .attr("x1",plot.marginLeft)
    .attr("x2",plot.width -  plot.marginRight)
    .attr("y1",(datum) => { return plot.yScale(datum); })
    .attr("y2",(datum) => { return plot.yScale(datum); })
    .attr("stroke","#aaa")
    .attr("stroke-width",1);

  return plot;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addSvg = function() {
  const plot = this;

  plot.svg = d3.select(plot.where)
    .append("svg")
    .attr("width",plot.width)
    .attr("height",plot.height);

  return plot;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addXAxis = function() {
  const plot = this;

  plot.xAxis = d3
    .axisBottom(plot.xScale)
    .ticks(plot.xAxisTicks);

  plot.xAxisGroup = plot.axisGroup
    .append("g")
    .attr("transform","translate(0,"+(plot.height / 2)+")")
    .call(plot.xAxis);

  return plot;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.addYAxis = function() {
  const plot = this;

  plot.yAxis = d3
    .axisLeft(plot.yScale)
    .ticks(plot.yAxisTicks);

  plot.yAxisGroup = plot.axisGroup
    .append("g")
    .attr("transform","translate("+(plot.width / 2)+",0)")
    .call(plot.yAxis);

  return plot;
};

/* global CartesianPlot */
CartesianPlot.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] ? plotter.options[key] : defaultValue;

  return plotter;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.defineXScale = function() {
  const plot = this;

  plot.xScale = d3
    .scaleLinear()
    .domain(plot.range)
    .range([plot.marginLeft,plot.width - plot.marginRight]);

  return plot;
};

/* global CartesianPlot */
/* global d3 */
CartesianPlot.prototype.defineYScale = function() {
  const plot = this;

  plot.yScale = d3
    .scaleLinear()
    .domain(plot.domain)
    .range([plot.height - plot.marginBottom,plot.marginTop]);

  return plot;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.addAxis = function() {
  const plotter = this;

  return plotter;
};

/* global FunctionPlotter */
/* global FunctionStep */
FunctionPlotter.prototype.addFunction = function(functionToPlot) {
  const plotter = this;
  let step;

  step = new FunctionStep({
    "parent":plotter,
    "functionToPlot":functionToPlot,
    "y":plotter.margins.top + (plotter.functions.length * 50),
    "height":plotter.lineHeight,
    "sampleCount":plotter.samples,
    "isDiscrete":plotter.isDiscrete
  });

  plotter.functions
    .push(step);

  plotter.outputLabel
    .attr("y",plotter.margins.top + plotter.lineHeight * plotter.functions.length);


  return plotter;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.addInputLabel = function() {
  const plotter = this;

  plotter.inputLabel = plotter.svg
    .append("text")
    .attr("x",plotter.margins.left - 10)
    .attr("y",plotter.margins.top)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("Input");

  return plotter;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.addOutputLabel = function() {
  const plotter = this;

  plotter.outputLabel = plotter.svg
    .append("text")
    .attr("x",plotter.margins.left - 10)
    .attr("y",0)
    .attr("text-anchor","end")
    .attr("alignment-baseline","middle")
    .attr("font-size","10pt")
    .text("Output");

  return plotter;
};

/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.addSvg = function() {
  const plotter = this;
  let selection = d3.select(plotter.where);

  plotter.svg = selection
    .append("svg")
    .attr("width",plotter.width)
    .attr("height",plotter.height)
    .on('mouseouver',plotter.mouseover())
    .on('mouseout',plotter.mouseout())
    .on('mousemove',plotter.mousemove());

  return plotter;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.addTitle = function() {
  const plotter = this;

  plotter.titleForeignObject = plotter.svg
    .append("foreignObject")
    .attr("width",plotter.width)
    .attr("height",plotter.margins.top);

  plotter.titleForeignBody = plotter.titleForeignObject
    .append("xhtml:body")
    .html(plotter.titleString);

  return this;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] !== undefined ? plotter.options[key] : defaultValue;

  return plotter;
};

/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.defineXScale = function() {
  const plotter = this;

  plotter.xScale = d3.scaleLinear()
    .domain(plotter.domain)
    .range(plotter.range);

  return plotter;
};

/* global CartesianPlot */
/* global CartesianFunction */

CartesianPlot.prototype.addFunction = function(options) {
  const plot = this;

  let plottedFunction;

  options.plot = plot;
  plottedFunction = new CartesianFunction(options);
  plot.plottedFunctions.push(plottedFunction);

  return plot;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.calculateValues = function(initialValue) {
  const plotter = this;

  let currentValue,
    valueChain;

  currentValue = initialValue;
  valueChain = [];

  plotter.functions.forEach((aFunction) => {
    const calculationStep = {};
    calculationStep.input = currentValue;
    calculationStep.output = aFunction.functionToPlot(currentValue);
    valueChain.push(calculationStep);
    currentValue = calculationStep.output;
  });

  plotter.valueChain = valueChain;
  plotter.outputValue = valueChain[valueChain.length - 1];

  return plotter;
};

/* global FunctionPlotter */
/* global FunctionPlotterInput */
FunctionPlotter.prototype.highlightStaticValue = function(value) {
  const plotter = this;

  let staticData;
  staticData = {
    "input":value,
    "output":plotter.functions[0].functionToPlot(value)
  };

  plotter.highlight = new FunctionPlotterInput({
    "parent":plotter.functions[0],
    "data":staticData,
    "isDiscrete":true,
    "isStatic":true
  });

  return plotter;
};

/* global FunctionPlotter */
FunctionPlotter.prototype.updateValues = function() {
  const plotter = this;

  plotter.functions.forEach((aFunction,index) => {
    aFunction
      .highlightValue(plotter.valueChain[index]);
  });

  return plotter;
};

/* global FunctionPlotterInput */
/* global d3 */
FunctionPlotterInput.prototype.mouseout = function() {
  const input = this;

  return () => {

    let highlightTransition;

    highlightTransition = d3
      .transition()
      .duration(125);

    input.inputCircle
      .transition(highlightTransition)
      .attr("fill",input.fill)
      .attr("r",input.r);

    input.inputText
      .transition(highlightTransition)
      .attr("opacity",0)
      .on('end',() => {input.inputText.attr("display","none"); });

    input.inputTextGhost
      .transition(highlightTransition)
      .attr("opacity",0)
      .on('end',() => {input.inputText.attr("display","none"); });


    if(isFinite(input.data.output)) {
      input.line
        .transition(highlightTransition)
        .attr("stroke",input.lineStroke);

      input.outputCircle
        .transition(highlightTransition)
        .attr("fill",input.fill)
        .attr("r",input.r);

      input.outputText
        .transition(highlightTransition)
        .attr("opacity",0)
        .on('end',() => {input.outputText.attr("display","none"); });

      input.outputTextGhost
        .transition(highlightTransition)
        .attr("opacity",0)
        .on('end',() => {input.inputText.attr("display","none"); });      
    }


  };
};

/* global FunctionPlotterInput */
/* global d3 */
FunctionPlotterInput.prototype.mouseover = function() {
  const input = this;

  return () => {
    let highlightTransition;

    highlightTransition = d3
      .transition()
      .duration(125);

    input.inputCircle
      .transition(highlightTransition)
      .attr("fill",input.highlightFill)
      .attr("r",input.highlightRadius);

    input.inputTextGhost
      .attr("display","block")
      .transition(highlightTransition)
      .attr("opacity",1);

    input.inputText
      .attr("display","block")
      .transition(highlightTransition)
      .attr("opacity",1);

    if(isFinite(input.data.output)) {
      input.line
        .transition(highlightTransition)
        .attr("stroke",input.highlightFill);

      input.outputCircle
        .transition(highlightTransition)
        .attr("fill",input.highlightFill)
        .attr("r",input.highlightRadius);

      input.outputText
        .attr("display","block")
        .transition(highlightTransition)
        .attr("opacity",1);

      input.outputTextGhost
        .attr("display","block")
        .transition(highlightTransition)
        .attr("opacity",1);      
    }

  };
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addInputCircle = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.inputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.input))
      .attr("cy",0)
      .attr("r",input.r)
      .attr("fill",input.fill)
      .attr("stroke",input.stroke)
      .attr("stroke-width",input.strokeWidth)
      .attr("cursor","pointer")
      .on('mouseover',input.mouseover())
      .on('mouseout',input.mouseout());
  } else {
    input.inputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.input))
      .attr("cy",0)
      .attr("r",input.r)
      .attr("fill","white")
      .attr("stroke",input.fill)
      .attr("stroke-width",1)
      .attr("cursor","pointer")
      .on('mouseover',input.mouseover())
      .on('mouseout',input.mouseout());
  }

  return input;
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addInputText = function() {
  const input = this;

  input.inputTextGhost = input.parent.group
    .append("text")
    .attr("x",input.plotter.xScale(input.data.input))
    .attr("y",-2)
    .attr("fill",input.textForeground)
    .attr("stroke",input.textBackground)
    .attr("stroke-width",input.textOutline)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","ideographic")
    .attr("font-size",input.textSize)
    .attr("display","none")
    .attr("opacity",0)
    .text(input.data.input.toFixed(2));

  input.inputText = input.parent.group
    .append("text")
    .attr("x",input.plotter.xScale(input.data.input))
    .attr("y",-2)
    .attr("fill",input.textForeground)
    .attr("text-anchor","middle")
    .attr("alignment-baseline","ideographic")
    .attr("font-size",input.textSize)
    .attr("display","none")
    .attr("opacity",0)
    .text(input.data.input.toFixed(2));

  return input;
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addOutputCircle = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.outputCircle = input.parent.group
      .append("circle")
      .attr("cx",input.plotter.xScale(input.data.output))
      .attr("cy",input.parent.height)
      .attr("r",input.r)
      .attr("fill",input.fill)
      .attr("stroke",input.stroke)
      .attr("stroke-width",input.strokeWidth);
  }

  return input;
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addOutputText = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.outputTextGhost = input.parent.group
      .append("text")
      .attr("x",input.plotter.xScale(input.data.output))
      .attr("y",input.parent.height + 5)
      .attr("fill",input.textForeground)
      .attr("stroke",input.textBackground)
      .attr("stroke-width",input.textOutline)
      .attr("text-anchor","middle")
      .attr("alignment-baseline","text-before-edge")
      .attr("font-size",input.textSize)
      .attr("display","none")
      .attr("opacity",0)
      .text(input.data.output.toFixed(2));

    input.outputText = input.parent.group
      .append("text")
      .attr("x",input.plotter.xScale(input.data.output))
      .attr("y",input.parent.height + 5)
      .attr("fill",input.textForeground)
      .attr("text-anchor","middle")
      .attr("alignment-baseline","text-before-edge")
      .attr("font-size",input.textSize)
      .attr("display","none")
      .attr("opacity",0)
      .text(input.data.output.toFixed(2));    
  }

  return input;
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.addTransformLine = function() {
  const input = this;

  if(isFinite(input.data.output)) {
    input.line = input.parent.group
      .append("line")
      .attr("x1",input.plotter.xScale(input.data.input))
      .attr("x2",input.plotter.xScale(input.data.output))
      .attr("y1",0)
      .attr("y2",input.parent.height)
      .attr("stroke",input.lineStroke)
      .attr("stroke-width",input.lineStrokeWidth);
  }

  return input;
};

/* global FunctionPlotterInput */
FunctionPlotterInput.prototype.defaulter = function(key,defaultValue) {
  const plotter = this;

  plotter[key] = plotter.options[key] !== undefined ? plotter.options[key] : defaultValue;

  return plotter;
};

/* global FunctionStep  */
FunctionStep.prototype.addHighlight = function() {
  const step = this;

  step.highlight = step.group
    .append("line")
    .attr("stroke","orange")
    .attr("stroke-width",5);
    
  return step;
};

/* global FunctionStep */
/* global FunctionPlotterInput */
FunctionStep.prototype.addInputs = function(sampleData) {
  const step = this;

  sampleData.forEach((datum) => {
    let createdInput;

    createdInput = new FunctionPlotterInput({
      "parent":step,
      "data":datum,
      "isDiscrete":step.parent.isDiscrete
    });
  });


  return step;
};

/* global FunctionStep */
FunctionStep.prototype.createGroup = function() {
  const step = this;

  step.group = step.parent.svg
    .append("g")
    .attr("transform","translate("+step.x+","+step.y+")");

  return step;
};

/* global FunctionStep */
FunctionStep.prototype.defaulter = function(key,defaultValue) {
  const step = this;

  step[key] = step.options[key] ? step.options[key] : defaultValue;

  return step;
};

/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.inputAxis = function() {
  const step = this;

  let axisGroup;

  axisGroup = step.group
    .append("g")
    .call(d3.axisTop(step.parent.xScale).ticks(2));


  return step;
};

/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.outputAxis = function() {
  const step = this;

  let axisGroup;

  axisGroup = step.group
    .append("g")
    .call(d3.axisBottom(step.parent.xScale).ticks(2))
    .attr("transform","translate("+0+","+step.height+")");


  return step;
};

/* global FunctionStep */
/* global d3 */
FunctionStep.prototype.sampleValues = function() {
  const step = this;

  let sampleData,
    sampleSteps;

  sampleData = [];
  sampleSteps = (step.parent.domain[1] - step.parent.domain[0]) / step.sampleCount;
  d3.range(step.parent.domain[0],step.parent.domain[1],sampleSteps).forEach((inputValue) => {
    sampleData.push({
      "input":inputValue,
      "output":step.functionToPlot(inputValue)
    });
  });

  step
    .addInputs(sampleData);


  return step;
};

/* global FunctionStep */
FunctionStep.prototype.highlightValue = function(value) {
  const step = this;

  if(isFinite(step.parent.xScale(value.output))) {
    step.highlight
      .attr("x1",step.parent.xScale(value.input))
      .attr("x2",step.parent.xScale(value.output))
      .attr("y1",0)
      .attr("y2",step.height);
  }

  return step;
};

/* global FunctionPlotter */
/* global d3 */
FunctionPlotter.prototype.mousemove = function() {
  const plotter = this;

  return () => {
    let mouseValue;

    if(!plotter.interactive) { return; }

    mouseValue = plotter.xScale.invert(d3.event.offsetX);

    if(mouseValue < plotter.domain[0]) { return; }
    if(mouseValue > plotter.domain[1]) { return; }
    plotter
      .calculateValues(mouseValue)
      .updateValues();

  };

};

/* global FunctionPlotter */
FunctionPlotter.prototype.mouseout = function() {
  return () => {
    console.log("MOUSEOUT");
  };
};

/* global FunctionPlotter */
FunctionPlotter.prototype.mouseover = function() {
  return () => {
    console.log("MOUSEOVER");
  };
};
