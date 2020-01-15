function Timeline(options) {
  const timeline = this;
  init(options);
  return timeline;


  function init(options) {
    timeline.where = options.where;
    timeline.hasStarted = false;
    timeline.data = timeline.defineData();
    timeline.layout = timeline.defineLayout();
    timeline.style = timeline.defineStyle();
    timeline.scale = timeline.defineScale();
    timeline.timeScale = timeline.defineTimeScale();

    timeline.heading = timeline.addHeading();
    timeline.svg = timeline.addSvg();
    timeline.layers = timeline.addLayers();
    timeline.axis = timeline.addAxis();
    timeline.axisGroup = timeline.addAxisGroup();

    timeline.companies = timeline.addCompanies();

    timeline.applyLayout();

  }
}
