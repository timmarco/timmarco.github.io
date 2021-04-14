PortfolioItemContent.prototype.vimeo = function(vimeoId,previewSource) {
  const content = this;

  content.hero = new HeroPlayer(content.videoDiv,vimeoId,previewSource);

  return content;
}
