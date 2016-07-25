function zipArrays(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i], arr2[i]);
  }
  return newArray;
}


console.log(zipArrays([1,2,3,7], [4,5,6,]));
