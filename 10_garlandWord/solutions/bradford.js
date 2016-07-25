function garland(string) {
  var array = [];
  for (var i = 1; i < string.length; i++) {
  	if ( string.substr(0, i) === string.substr(-i) )
      array.push( string.substr(0, i) )
  }
  if ( array.length === 0 ) {
  	return 0;
  } else {
  return array[ array.length -1 ].length
  }
}

module.exports = garland;
