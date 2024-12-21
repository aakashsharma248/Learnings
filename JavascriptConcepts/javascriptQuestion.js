// Check the number is Palindrome or not
const checkPalindrome = (str) =>{
    const arr = [1,2,3,4,5];
    console.log(str.split('').reverse().join(''));
    console.log(arr.reverse());
}

console.log(checkPalindrome("abcbade"));


// Find the factorial of the number
const factorial = (data) =>{
  let output=1;
  let memoizedArray = new Array(1000000);
  if(memoizedArray[data]){
      console.log("returning value from memoized")
      return 1*memoizedArray[data];
  }
  for(let i=data;i>=1;i--){
      console.log("Calculating the new value")
      output = output * i;
  }
  return output;
}

console.log(factorial(4));
console.log(factorial(2));

// Find the Fibonacci number
let fibonnaci = (fibNumber) =>{
    let output = new Array(fibNumber);
    output[0]=1
    output[1]=1
    output[2]=1
  for(let i=3;i<=fibNumber;i++){
      output[i] = output[i-1]+output[i-2]
  }
  return output[fibNumber]
}

console.log(fibonnaci(8));


// convert string into title case
function toTitleCase(str) {
    let output = "";
    const words = str.split(" ");
    words.map((word,idx)=>{
        let ch = word.charAt(0);
        // console.log(ch,ch.toUpperCase())
        let newWord = word.replace(ch,ch.toUpperCase());
        if(idx==words.length-1){
                 output = output + newWord;
        }
        else{
            output = output + newWord + " ";
        }
    })
    return output;
}

console.log(toTitleCase("this is a String"))


// Find unique elements from the array
const arr1 = [1,2,3,4,4,32,23,2,1];
const uniqueElement = (arr) => {
 let output = []
 arr.map((ele)=>{
     if(!output.includes(ele)){
         output.push(ele);
     }
 })   
 return output;
}
console.log(uniqueElement(arr1))


// Given a string, write a function to count the occurrences of each character in the string. 
const input = "This is a String";
const characterOccurance = (arr) => {
  let output = {};
  const words = input.split(" ");
  words.map((word)=>{
      for(let i=0;i<word.length;i++){
        //   console.log(word[i].toLowerCase());
          let ch = word[i].toLowerCase()
          if(output[ch]){
              output[ch] +=1; 
          }else{
             output = {...output,[ch]:1}
      }
      }
  })
  return output;
}
console.log(characterOccurance(input))

// Implement a function that finds the second smallest element in an array of integers. 
const arr = [1,3,4,4,32,23];

function secondSmallestInteger(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    arr.forEach((ele)=>{
        if(ele<min){
            secondMin = min;
            min = ele;
        }
        else if(ele<secondMin){
            secondMin = ele
        }
    })
    return secondMin;
}
console.log(secondSmallestInteger(arr));


//  Implement the function to flatten the array
function flattenArray(arr,ans=[]){
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === "number"){
            ans.push(arr[i]);
        }
        else{
            flattenArray(arr[i], ans);
        }
    }    
    return ans;
  }
  
  const nestedArray = [1,2,3,[4,5,[6],[7,8]]];
  const output = flattenArray(arr);
  console.log(output);

// WAP to simulate a card deck. The deck should be able to hand over a random card. Remember that once a card is handed out, that card is gone forever and cannot be handed out again.


deck = [
    "♠ace", "♠2", " ♠3", " ♠4", " ♠5", " ♠6", " ♠7", " ♠8", " ♠9", " ♠10", " ♠jack", "♠queen", "♠king",
    "♣ace", "♣2", " ♣3", " ♣4", " ♣5", " ♣6", " ♣7", " ♣8", " ♣9", " ♣10", " ♣jack", "♣queen", "♣king",
    "♥ace", "♥2", " ♥3", " ♥4", " ♥5", " ♥6", " ♥7", " ♥8", " ♥9", " ♥10", " ♥jack", "♥queen", "♥king",
    "♦ace", "♦2", " ♦3", " ♦4", " ♦5", " ♦6", " ♦7", " ♦8", " ♦9", " ♦10", " ♦jack", "♦queen", "♦king"];
    
    function drawRandomCard(deck){
        while(deck.length>0){
          const lengthOfDeck = deck.length;
          console.log(lengthOfDeck);
          const randomIndex = Math.floor(Math.random()*lengthOfDeck)
          console.log(randomIndex,'randomIndex')
           const removedElement = deck.splice(randomIndex,1);
           console.log("Card Drawn ", ...removedElement)   
        }
    }
    drawRandomCard(deck)

// permutation of a string 

const str = "abcd";

const permutation = (str) => {
   if (str.length <= 1) return [str];
   
  const finalOutput = [];  // incase we need to maintain dupicatie then change this array to Set
//    --> const finalOutput = new Set();
  for(let i=0;i<str.length;i++){
      let ch = str[i];
      let remCh = str.slice(0,i) + str.slice(i+1);
      
      const computePerm = permutation(remCh);
      
      for(let p of computePerm){
          finalOutput.push(ch+p); // incase we need to maintain dupicatie then change this array to Set
          //    --> const finalOutput.add(ch+p);
      }
  }
//   console.log(finalOutput)
  return finalOutput;
}

const ans = permutation(str);

console.log(ans);

// Input: We have a JSON file containing user transactions. We need to group the transactions by user ID and sum the amounts for each user. The output format is given below.

//TODO: IMPORTANT
  const array = [{
      transactionId: 1,
      amount: 45.56,
      userId: 1
    },
    {
      transactionId: 2,
      amount: 90,
      userId: 2
    },
    {
      transactionId: 3,
      amount: 100,
      userId: 5
    },
    {
      transactionId: 4,
      amount: 346,
      userId: 6
    },
    {
      transactionId: 6,
      amount: 55,
      userId: 5
    },
    {
      transactionId: 8,
      amount: 5,
      userId: 2
    },
    {
      transactionId: 11,
      amount: 89,
      userId: 1
    },
    {
      transactionId: 23,
      amount: 32,
      userId: 9
    },
  ];

// Output:
//   const result = [{
//       userId: 1,
//       total: 134.56
//     },
//     {
//       userId: 2,
//       total: 95
//     },
//     {
//       userId: 5,
//       total: 155
//     },
//     {
//       userId: 6,
//       total: 346
//     },
//     {
//       userId: 9,
//       total: 92
//     },
//   ]

// Solution:
  const output4 = Object.values(array.reduce((acc,curr)=>{
      const {amount, userId} = curr;
      if(acc[userId]){
          acc[userId].total = acc[userId].total + amount;
      }
      else{
          acc[userId] = {userId: userId, total: amount}
      }
      return acc;
  },{}));
  
  console.log(output4);


    
//   "10" - "9" + "10" - "9" + "10"
     
//      "110" - "9" ==> "101"+"10" => "10110"
     
     
     
// function test() {
//  for(var j=1; j<=5;j++) {
//      function dummy(j){
//              setTimeout(function(){
//            console.log(j);
//          }, j * 1000);
            
//      }
//     dummy(j)
//  }
// }

// test();


// 9 == 9
 
// 9 == "9" 
 
// 9 === "9"
 
// 9 === 9
 
// [9] === [9]
 
// [9] == [9]
 
// "10" - "9" + "10" - "9" + "10"
 
// function test() {

//  for(var j=1; j<=5;j++) {

//      setTimeout(function(){

//          console.log(j);

//      }, j * 1000);

//  }

// }

