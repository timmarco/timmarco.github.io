SnellsLaw.prototype.mouseMove = function() {
  const snells = this;

  return () => {
    const coordinates = {
      "x":event.offsetX,
      "y":event.offsetY
    };

    snells
      .updateForMouseCoordinates(coordinates);

  }
}
