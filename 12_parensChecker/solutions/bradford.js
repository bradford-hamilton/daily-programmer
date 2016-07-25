function parensChecker(string) {

  var sanitized = string.replace(/[^()]/g,"");
  var len = sanitized.length;
  var array = [];

  for (var i = 0; i < len; i++) {
    if ( string[i] === '(' ) {
      array.push( string[i] );
    } else if ( string[i] === ')' && array.length === 0 ) {
      return false;
    } else {
      array.pop();
    }
  }
  if ( array.length === 0 ) {
    return true;
  } else {
    return false;
  }
}

module.exports = parensChecker;
