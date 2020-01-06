function MobileWorkExample(options,index,app) {
  const example = this;
  init(options,index,app);
  return example;

  function init(options,index,app) {
    example.parent = app;
    example.index = index;
    example.options = options;
    example.text = options.text;
    example.description = options.description;
    example.identifier = options.identifier;
    example.imagePaths = options.imagePaths;
    example.imageSize = options.imageSize;
    example.href = options.href;
    example.index = index;

    example.layout = example.defineLayout();
    example.swipeContainer = example.addSwipeDiv();
    example.svg = example.addSvg();
    example.defs = example.addDefs();
    // example.filters = example.addFilters();
    example.layers = example.addLayers();
    // example.scales = example.addScales();
    example.images = example.addImages();
    example.headline = example.addHeadline();
    example.tapButton = example.addTapButton();
    // example.body = example.addTextBody();
    // example.hotspot = example.addHotSpot();
  }
}
