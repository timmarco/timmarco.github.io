function HeroPlayer(where,vimeoId,previewSource) {
  const player = this;
  init(where,vimeoId,previewSource);
  return player;

  function init(where,vimeoId,previewSource) {

    player.vimeoId = vimeoId;

    player.videoDiv = player.addVideoDiv(where);
    player.iframeHolder = player.addIframeHolder();
    player.videoLoad = player.addVideoLoad(previewSource);
    player.playerOverlay = player.addPlayerOverlay();
    player.messageDiv = player.addMessageDiv();

  }
}
