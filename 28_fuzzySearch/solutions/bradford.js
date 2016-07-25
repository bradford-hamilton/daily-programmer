var names = ["mike", "fred", "rob", "dave", "jack", "marry", "mark", "jim", "jill", "june", "jess", "grey", "greg", "mark", "jenn", "richard", "robert"];

module.exports = function (stringName, namesArray) {
  stringName = stringName.toLowerCase();
  var list = [];
  namesArray.forEach(function(name) {
    name = name.toLowerCase();
    if ( stringName === name ) {
      list.push(name);
    }
  });
  return list;
};
