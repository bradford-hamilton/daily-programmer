function countLetters(string) {
  var solution = {};
  var sanitized = string.toLowerCase().replace(/[^a-z]/g, "");

  for (var i = 0, length = sanitized.length; i < length; i++) {
    if ( solution.hasOwnProperty( sanitized[i] ) === false ) {
      solution[sanitized[i]] = 1;
    } else if ( solution.hasOwnProperty( sanitized[i] ) === true ) {
      solution[sanitized[i]]++;
    }
  }
  return solution;
}

countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.");
