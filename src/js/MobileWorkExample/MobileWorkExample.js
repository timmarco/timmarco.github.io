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
    example.imagePath = options.mobileImage;
    example.imageSize = options.imageSize;
    example.href = options.href;
    example.index = index;

    example.layout = example.defineLayout();
    // example.swipeContainer = example.addSwipeDiv();
    example.swipeImage = example.addSwipeImage();

  }
}
