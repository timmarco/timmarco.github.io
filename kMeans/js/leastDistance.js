function least_distance(array) {
  var greatest;
  var indexOfGreatest;
  for (var i = 0; i < array.length; i++) {
    if (!greatest || array[i] < greatest) {
      greatest = array[i];
      indexOfGreatest = i;
  }
}
return indexOfGreatest;
}
