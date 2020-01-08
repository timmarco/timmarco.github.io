function ModelThumbnail(options) {
  const thumbnail = this;
  init(options);
  return thumbnail;

  function init(options) {
    thumbnail.headlineText = options.name;
    thumbnail.parent = options.parent;
    thumbnail.imagePath = options.imagePath;
    thumbnail.gltfPath = options.gltfPath;
    thumbnail.name = options.name;
    thumbnail.description = options.description;
    thumbnail.cameraPosition = options.cameraPosition;
    thumbnail.cameraRotation = options.cameraRotation;

    thumbnail.isActive = false;

    thumbnail.layout = thumbnail.defineLayout();
    thumbnail.style = thumbnail.defineStyle();

    thumbnail.svg = thumbnail.addSvg();
    thumbnail.layers = thumbnail.addLayers();
    thumbnail.headlines = thumbnail.addHeadline();
    thumbnail.image = thumbnail.addImage();

    thumbnail.layoutHeadline();
    thumbnail.scaleImage();



  }
}
