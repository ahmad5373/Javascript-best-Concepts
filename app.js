const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Importing JavaScript file
const javascript = require("./javaScript");

app.get("/", (req, res) => {
  res.send("This is a practice test");
});

// Even Numbers
app.get("/Even", (req, res) => {
  const evenNumbers = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  console.log("Even", evenNumbers);
});

// Console Even Numbers From 2D Array
app.get("/2DEven", (req, res) => {
  const array2d = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
  ];

  const evenNumbers2d = [];
  for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
      if (array2d[i][j] % 2 === 0) {
        evenNumbers2d.push(array2d[i][j]);
      }
    }
  }
  console.log("Even Numbers from 2D Array:", evenNumbers2d);
});

// Odd Numbers
app.get("/Odd", (req, res) => {
  const oddNumbers = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
      oddNumbers.push(i);
    }
  }
  console.log("Odd", oddNumbers);
});

// Palindrome Numbers
app.get("/Palindrome", (req, res) => {
  const palindromes = [];
  for (let i = 10; i <= 100; i++) {
    const str = i.toString();
    if (IsPalindrome(str)) {
      palindromes.push(str);
    }
  }
  console.log("Palindrome Numbers", palindromes);
});

const IsPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

// Palindromic Strings
app.get("/PalindromicString", (req, res) => {
  let s = "dababa";
  let output = "";
  if (IsPalindromic(s)) {
    console.log("The word is a palindrome");
    output += s;
    console.log("Output:", output);
    return output;
  } else {
    console.log("The word is NOT a palindrome");
  }
});

const IsPalindromic = (str) => {
  const alphanumericStr = str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const reversedStr = alphanumericStr.split("").reverse().join("");
  return alphanumericStr === reversedStr;
};

// Prime Numbers
app.get("/Prime", (req, res) => {
  const primes = [];
  for (let i = 0; i <= 100; i++) {
    if (IsPrime(i)) {
      primes.push(i);
    }
  }
  console.log("Prime Numbers", primes);
});

const IsPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
   if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// Fibonacci Numbers
app.get("/Fibonacci", (req, res) => {
  let Number = 8;
  let a = 0;
  let b = 1;
  let sum_num;
  for (let i = 1; i < Number; i++) {
    sum_num = a + b;
    a = b;
    b = sum_num;
    console.log(b);
  }
});

// 2D Array
app.get("/2DArray", (req, res) => {
  const array = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
  ];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
});

// ForEach Loop
app.get("/ForEach", (req, res) => {
  const array = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  array.forEach((element, index) => {
    console.log(`Index: ${index}, Value: ${element}`);
  });
});

// Similar Array
const SimilarArray = () => {
  let Number1 = [
    1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9, 9, 10, 11, 12, 13, 14, 25, 26, 27, 15,
  ];
  let Number2 = [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 24, 25, 26];

  const commenElements = Number1.filter((element) => Number2.includes(element));
  const uniqueElements = [...new Set(commenElements)];
  console.log("Unique Elements:", uniqueElements);

  const totalCount = uniqueElements.length;
  console.log("Total Count:", totalCount);
};

SimilarArray();

// Roman Number to Integers
function romanToInt(s) {
  const mapdata = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (mapdata[s[i]] < mapdata[s[i + 1]]) {
      result += mapdata[s[i + 1]] - mapdata[s[i]];
      i++;
    } else {
      result += mapdata[s[i]];
    }
  }
  return result;
}

romanToInt("MCMXCIV");

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
