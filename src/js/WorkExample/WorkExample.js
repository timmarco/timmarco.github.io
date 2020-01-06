function WorkExample(options,index,parent) {
  const example = this;
  init(options,index,parent);
  return example;

  function init(options,index,parent) {

    example.parent = parent;
    example.text = options.text;
    example.description = options.description;
    example.identifier = options.identifier;
    example.imagePaths = options.imagePaths;
    example.imageSize = options.imageSize;
    example.href = options.href;
    example.index = index;

    example.layout = example.defineLayout();
    example.svg = example.addSvg();
    example.defs = example.addDefs();
    example.filters = example.addFilters();
    example.layers = example.addLayers();
    example.scales = example.addScales();
    example.images = example.addImages();
    example.headline = example.addHeadline();
    example.body = example.addTextBody();
    example.hotspot = example.addHotSpot();

  }
}
