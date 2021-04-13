ArcCountdown.prototype.pauseCountdown = function() {
  const countdown = this;

  return () => {
    [countdown.arc,countdown.text,countdown.textOutline]
      .forEach((element) => {
        element
          .interrupt();
      });

    countdown
      .initialize();
  }
}
