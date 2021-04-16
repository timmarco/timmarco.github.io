function HeroPlayer(where,vimeoId,previewSource) {
  const hero = this;
  init(where,vimeoId,previewSource);
  return hero;

  function init(where,vimeoId,previewSource) {

    hero.vimeoId = vimeoId;

    hero.videoDiv = hero.addVideoDiv(where);
    hero.iframeHolder = hero.addIframeHolder();
    hero.videoLoad = hero.addVideoLoad(previewSource);
    hero.playerOverlay = hero.addPlayerOverlay();
    hero.messageDiv = hero.addMessageDiv();

  }
}
