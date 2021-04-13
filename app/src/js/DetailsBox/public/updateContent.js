DetailsBox.prototype.updateContent = function(item) {
  const box = this;

  box.subtitleDiv
    .html(item.manifest.subtitle);

  box.dateDiv
    .html(item.manifest.circa);

  return box;
}
