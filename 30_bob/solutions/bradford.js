function Bob() {
  this.hey = function(string) {
    if (string.replace(/\s/g,"") === "") {
      return 'Fine. Be that way!';
    } else if ( string.toUpperCase() ===string && string.match(/[a-zA-Z]/) ) {
      return 'Whoa, chill out!';
    } else if (string[string.length -1] === '?') {
      return 'Sure.';
    }
    return 'Whatever.';
  };
}


module.exports = Bob;
