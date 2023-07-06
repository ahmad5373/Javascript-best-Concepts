let bikes = ["yamaha", "Honda CD", "Honda 125", "Suzuki", "Hi speed"];

// 1. toString Method: returns a string with array values separated by commas
console.log(bikes.toString());
//"yamaha ,Honda CD, Honda 125, Suzuki, Hi speed"

// 2. Join() Method: returns a new string by concatenating all the elements separated by a comma
console.log(bikes.join());
//Expected output : "yamaha ,Honda CD, Honda 125, Suzuki, Hi speed"

console.log(bikes.join(""));
//Expected output :  "yamaha Honda CD Honda 125 Suzuki Hi speed"

console.log(bikes.join("-"));
//Expected output :  "yamaha-Honda CD-Honda 125-Suzuki-Hi speed"

// 3. pop() Method: removes the last element and returns the removed element
console.log(bikes.pop());
console.log(bikes);
//Expected output :  "yamaha", "Honda CD", "Honda 125", "Suzuki""

// 4. push() method: adds new items to the end of the array and changes the array length
console.log(bikes.push("Heavy Bike"));
console.log(bikes);
//Expected output :  "yamaha", "Honda CD", "Honda 125", "Suzuki" ,"Heavy Bike"

// 5. Shift: removes the first element of the array and returns it
console.log(bikes.shift());
console.log(bikes);
// Expected Output : 'Honda CD', 'Honda 125', 'Suzuki', 'Heavy Bike'

// 6. unshift() Method: adds a new element to the start of the array and returns the array length
console.log(bikes.unshift("Crown"));
console.log(bikes);
// Expected Output : 'Crown' , 'Honda CD', 'Honda 125', 'Suzuki', 'Heavy Bike'

// 7. delete Array[index] Method: deletes an element in the array and returns the element with an undefined hole <index empty item>
// console.log(delete bikes[1]);
// console.log(bikes);
// Expected Output :  'Crown', <1 empty item>, 'Honda 125', 'Suzuki', 'Heavy Bike'

// 8. concat() Method: joins two or more arrays and returns the joined array
let array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];
let concatedArray = array1.concat(array2);
console.log(concatedArray);
// Expected Output :  [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// 9. sort() method: sorts the array elements and overwrites the original array
bikes.sort();
console.log(bikes);
// Expected Output [ 'Crown', 'Heavy Bike', 'Honda CD', 'Honda 125', 'Suzuki' ]

// 10. Splice() Method: adds and/or removes elements in the array, overwriting the original array
bikes.splice(2, 2, "Hi-Speed", "Yamaha150"); // array1.splice(index, Howmany,Item1 ......ItemX)
// In the index 2, remove two items and add two new items
console.log(bikes);
// Expected Output [ 'Crown', 'Heavy Bike', 'Hi-Speed', 'Yamaha150', 'Suzuki' ]

// 11. Slice() method: slices outa piece from an array and creates a new array
const bike = bikes.slice(1, 3); // array1.slice(start , end); Syntax
console.log(bike);
// Expected Output [ 'Heavy Bike', 'Hi-Speed' ]


// 12. reverse() method: reverses the order of the elements in an array, overwriting the original array
let number = [1,2,3,4,5,6,7,8]
let strn = ["A","B","C","D","E","F"]
number.reverse()
console.log(number)// Expected Output [  8, 7, 6, 5,4, 3, 2, 1 ]

strn.reverse()
console.log(strn) // Expected Output [ 'F', 'E', 'D', 'C', 'B', 'A' ]


// 13. IsArray() method: returns true if an object is an array, otherwise false
let string = "ABCDEFGHIJ"
console.log(Array.isArray(bikes)) // return true
console.log(Array.isArray(string)) // return false

// 14. indexOf() method: returns the first index (position) of a specified value. Returns -1 if the value is not found. Searches from left to right.
let elements = ["laptop" , "Iphone","Mobile","Charger"]
console.log(elements.indexOf('Mobile')) // return 2

// 15. lastIndexOf() method: returns the last index (position) of a specified value. Returns -1 if the value is not found. Searches from right to left.
console.log(elements.lastIndexOf("Mobile",0)) // return -1

// 16. find() method: returns the first element in the provided array that satisfies the provided testing function. If no value satisfies the testing function, undefined is returned.
let arry = [4 , 6, 8, 12,14,10,7,9];

const found = arry.find((element)=> element>10);
console.log(found) // return 12

// 17. findIndex() method: returns the index of the first element in the provided array that satisfies the provided testing function. If no element satisfies the testing function, -1 is returned.
const isLargNumber = ((element) => element>13);

console.log(arry.findIndex(isLargNumber))
// Expected Output 4(index)  14 is a larger number than 13

// 18. include() method: returns true if an array contains a specified value (this is case-sensitive), otherwise false if the value is not found.
let num = [ 1,2,3]
console.log(num.includes(3)) // return true

// 19. entries() method: returns an array iterator object with key/value pairs. This method does not change the original array.
const days = ["sun","monday","tue","wed","thu","fri","sat" ];

const day = days.entries();

for(let x of day){
    console.log(x + "\n")
}
// Output
// 0,sun
// 1,monday
// 2,tue
// 3,wed
// 4,thu
// 5,fri
// 6,sat

// 20. filter() method: creates a new array filled with elements that pass a test provided by a function
const ages = [40 ,34,17,24,16,18,41];
const result = ages.filter(checkAdult)

function checkAdult (age){
return age >= 18;
}
console.log(result)// Expected Output [ 40, 34, 24, 18, 41 ]
