TimApp.prototype.getBrowserInfo = function() {
  const app = this;

  const browserInfo = {};

  browserInfo.isTouchDevice = 'ontouchstart' in document.documentElement;
  browserInfo.userAgent = navigator.userAgent;
  browserInfo.isFirefox = navigator.userAgent.indexOf("Firefox") == -1 ? false : true;
  browserInfo.isSafari = checkSafari();

  function checkSafari() {
    if(navigator.userAgent.indexOf("Safari") != -1) {
      if(navigator.userAgent.indexOf("Chrome") == -1) {
        return true;
      }
    }
    return false;
  }

  return browserInfo;
}
