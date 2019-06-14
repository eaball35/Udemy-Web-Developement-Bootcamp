var age = prompt("What is your age?")
if (age < 0) {
  alert("error")
}
else if (age === 21) {
  alert("happy 21st birthday!!")
}
else if (age % 2 !== 0) {
  alert("your age is odd!")
}

// If age / square root of the age, if there is no remainder than it's a perfect square
else if (age % Math.sqrt(age) === 0) {
  alert ("Your age is a perfect square.")
}
