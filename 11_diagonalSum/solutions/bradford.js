function diagnalSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i][i];
  };
  return sum;
};

module.exports = diagnalSum;
