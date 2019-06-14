var numArray = [43,43,43,43,43];
printReverse()
isUniform()
sumArray()
max()

// printReverse()
// Write a function that takes an array as an argument and prints out the elements in the array in reverse order (don't actually reverse the array)
function printReverse(){
  for (var i = (numArray.length-1); i > -1; i--){
    console.log(numArray[i]);
  }
}


// isUniform()
// Write a function which takes an array as an argument and returns true if all elements are identical
function isUniform () {
  var firstValue = numArray[0];
  var uniNum = "true";

  for (var i = 0; i < numArray.length; i++){
    if (firstValue !== numArray[i]) {
    var uniNum = "false";
    }
  }
  console.log(uniNum);
}


// sumArray()
// Write a function that accepts an array of numbers and returns the sum of all numbers in the array
function sumArray (){
  var numSum = 0

  for (var i = 0; i < numArray.length; i++){
    var numSum = numSum + numArray[i];
  }
  console.log(numSum);
}


// max()
// Write a function that accepts an array of numbers and returns the maximum number in the sumArray
function max() {
  var maxNum = 0

  for (var i = 0; i < numArray.length; i++){
    if (numArray[i] > maxNum) {
      maxNum = numArray[i];
    }}
console.log(maxNum);
}
