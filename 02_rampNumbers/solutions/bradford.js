function rampNumber(num) {
  var array = num.toString().split('');
  var length = array.length;
  var test = [];
  var previousNum = 0;

  for (var i = 0; i < length; i++) {
    if ( array[i] >= previousNum ) {
      previousNum = array[i];
      test.push(array[i]);
    }
  }
  if ( length === test.length ) {
    return true;
  } else {
    return false;
  }
}

rampNumber(1232)
