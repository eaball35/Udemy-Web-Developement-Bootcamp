// 1. Print all numbers between -10 and 19
var num = -10

while (num <= 19) {
  alert(num);
  num ++;
}

// 2. Print all even numbers between 10 and 40
var num = 12

while (num <= 40) {
  alert(num);
  num += 2;
}

// alternative method
var num = 10

while (num <= 40) {
  if (num % 2 === 0) {
    alert(num);
  }
  num ++;
}


// 3. Print all odd numbers between 300 and 333

var num = 300

while (num <= 333) {
  if (num % 2 !== 0) {
    alert(num);
  }
  num ++;
}


// 4. Print all numbers divisible by 5 AND 3 between 5 and 50

var num = 5

while (num <= 50) {
  if (num % 5 === 0 && num % 3 ===0) {
  alert(num);
  }
  num ++;
}
