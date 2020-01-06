Timeline.prototype.defineTimeScale = function() {
    const timeline = this;

    let dates = [];
    timeline.data.map((a) => { return a.startDate}).forEach((date) => { dates.push(date)});
    timeline.data.map((a) => { return a.endDate}).forEach((date) => { dates.push(date)});

    const scale = d3.scaleTime()
      .domain(d3.extent(dates))
      .range([timeline.layout.transitionTime,0]);

    return scale;
}
