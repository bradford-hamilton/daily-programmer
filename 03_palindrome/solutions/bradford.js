function palindrome(string) {
  var sanitized = string.replace(/[^A-Za-z]/g, "").toLowerCase();
  var reverse = sanitized.split('').reverse().join('');
  return reverse === sanitized ? true : false;
}

palindrome("Madam, I'm Adam")
