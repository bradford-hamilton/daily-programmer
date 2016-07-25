function displayDimensions(array) {
  var solution = [];
  var height = 0;
  var len = array.length;
  for(var i = 0; i < len; i++) {
    height++;
  }
  solution.push(height, array[0].length);
  return solution;
}

function matrixIt(array) {
  var dim = displayDimensions(array);
  var count = 0;
  var solution = [];
  for(var i = 0; i < dim[1]; i++) {
    solution.push([]);
    for(var j = array.length - 1; j >= 0; j--) {
      solution[i][count] = array[j][i];
      count++;
    }
  }
  return solution;
}
