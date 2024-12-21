// push()
// -> It is used to add the elements or the array at the end of the array
// -> It modifies the original array 
// -> We can push one, two or even the whole array under the push() as argument
// -> It return the length of the new array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1,2,3,4,5,6]

const newArr = arr1.push(arr2);
console.log(newArr) // it will print 6

// these all are valid syntax
arr1.push(1,2,4);
arr1.push(1);



// POP()
// -> It is used to remove the elements from the end of the array 
// -> It modifies the original array 
// -> It return the length of the new array


const arr3 = [1, 2, 3, 4, 5, 6];

// both will work same 
const newArr3 = arr3.pop(4); // after passing the argument as well it will pop the last element itself
 arr3.pop(); 

console.log(newArr3) // it will print 6
console.log(arr3) // [1, 2, 3, 4, 5] -> 6 will get pop out of the array 


// SHIFT()
// -> Will pop the first element from the array
// -> Not always better to perfrom as it's expensive operation because we need to shift all the elements by 1 index on left
// -> It also modifies the actual array
// -> It return the poped element however the pop return the length of the new array

const arr4 = [1, 2, 3, 4, 5, 6];

const newArr4 = arr4.shift();

console.log(newArr4); // it will return 1 
console.log(arr4); // [ 2, 3, 4, 5, 6 ]


// UNSHIFT
// -> Will push the element at the start of the array
// -> Not always better to perfrom as it's expensive operation because we need to shift all the elements by 1 index on right
// -> It also modifies the actual array
// -> It return the length of the new array

const arr5 = [1, 2, 3, 4, 5, 6];

const newArr5 = arr5.unshift(2,3,4);

console.log(newArr4); // it will return 9
console.log(arr4);  // [ 2, 3, 4, 1, 2, 3, 4, 5, 6]

// Concar()
// -> Used to add two or more array
// -> It returns the new Array and didn't modify the actual array 

const arr6 = [1, 2, 3, 4, 5, 6];

const arr7 = [1, 2, 3,];

const faltuArray = [8,9]

const newArr6 = arr4.concat(arr5); // concatinate two arrays first return the elements of arr4 then arr5
const newArr7 = arr5.concat(arr4); // concatinate two arrays first return the elements of arr5 then arr4
const newArr8 = arr5.concat(arr4,faltuArray); // concatinate three arrays first return the elements of arr5 then arr4,faltuArray

console.log(arr6); // it returns the actual array without modification

console.log(newArr6);  // [ 1, 2, 3, 4, 5, 6, 1, 2, 3 ]
console.log(newArr7);  // [ 1, 2, 3, 1, 2, 3, 4, 5, 6 ]
console.log(newArr8);  // [ 1, 2, 3, 1, 2, 3, 4, 5, 6, 8, 9]
  

// indexOf()
// -> Used to find the index of element present in index
// -> It will return index incase element is present and return -1 if element is not present

const arr11 = [1, 2, 3, 4, 5, 6];

const newArr9 = arr4.indexOf(4); // it will return 3
const newArr10 = arr4.indexOf(9); // it will return -1

console.log(newArr9);
console.log(newArr10);

// includes()
// -> Used to find whether the element is present in the array or not
// -> also it will match the character or string case wise 
// -> It will return true incase element is present and return false if element is not present

const arr12 = [1, 2, 3, 4, 5, 6];

const newArr11 = arr4.includes(4); // it will return true
const newArr12 = arr4.includes(9); // it will return false

console.log(newArr11);
console.log(newArr12);


// reverse()
// -> Used to reverse an array
// -> It modifies the actual array

const arr13 = [1, 2, 3, 4, 5, 6];

const newArr13 = arr13.reverse(); // it will return the reverse array

console.log(arr13); // [ 6, 5, 4, 3, 2, 1 ]

console.log(newArr13); // [ 6, 5, 4, 3, 2, 1 ]


// sort()
// -> It will sort the array alphabetically based on the ascii value
// -> if we didn't pass any arguments in sort() then we can's sort the digits
// -> it consider the smallcase and uppercase character accordingly as there ascii value is different

const arr14 = ["Cat", "cat", "Elephant", "Dog"];

const newArr14 = arr14.sort(); // it will return the new sorted array alphabetically based on the ascii value

console.log(arr13); // [ 'Cat', 'Dog', 'Elephant', 'cat' ] -> "cat" will be at the end because of heigher ascii value

console.log(newArr13); //[ 'Cat', 'Dog', 'Elephant', 'cat' ]


// slice()
// -> it will take two argument which are the first index and the last index
// -> Used to take the array of elements from the array itself
// -> it will include the elements present at start index and exlude the elements present at end index
// -> It doesn't modift the actual array

const arr15 = ["Cat", "cat", "Elephant", "Dog", "Lion", "Tiger"];

const newArr15 = arr15.slice(1,3); 

console.log(newArr15); // [ 'cat', 'Elephant' ]

console.log(arr15); // [ 'Cat', 'cat', 'Elephant', 'Dog', 'Lion', 'Tiger' ]

// splice()
// used to remove and add the elemts at particular index of array
// first it will take the index where it needs to start then how many elements needs to removed then we can pass the 
// elements which need to be added
// -> Used to take the array of elements from the array itself
// -> it will include the elements present at start index 
// -> It modify the actual array


const arr16 = ["Cat", "cat", "Elephant", "Dog", "Lion", "Tiger"];

const newArr16 = arr15.splice(1,3);

console.log(arr16); // [ 'cat', 'Elephant', 'Dog' ]

console.log(newArr16); // [ 'Cat', 'Lion', 'Tiger' ]

// Next examlple:
const arr17 = ["Cat", "cat", "Elephant", "Dog", "Lion", "Tiger"];

const newArr17 = arr17.splice(1,1,"aak","sharma");

console.log(arr17); // [ 'Cat', 'aak', 'sharma', 'Elephant', 'Dog', 'Lion', 'Tiger' ] Added "aak" and "sharma"

console.log(newArr17); // [ 'cat' ] -> removed "cat"

// Next examlple:
const arr18 = ["Cat", "cat", "Elephant", "Dog", "Lion", "Tiger"];

const newArr18 = arr17.splice(1,0,"aak","sharma");

console.log(arr17); // ['Cat','aak','sharma', 'cat','Elephant', 'Dog','Lion','Tiger'] -> Added element ar 1 index

console.log(newArr17); // [] -> Removed nothing

// TODO: find Method: 
// The find() method of Array instances returns the first element in the provided array that satisfies
//  the provided testing function. If no values satisfy the testing function, undefined is returned.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// Expected output: 12