// ForEach(): 
// -> It's a array function which is used to iterate over the array elements
// -> It doesn't return anything even if we add the return statement, it will return undefined only
// -> we can't chain methods in this, as it doesn't return anything

// Map():
// ->  whenever we need to modify the array elements we should use map there 
// -> It's a array function which is used to iterate over the array elements
// -> It return the value everytime 
// -> it will return us the new array without modifying the original
// -> we can chain methods in this, as it return anything

// Filter():
// -> Whenever we need to filter out the data without modification then we should use this
// -> It's a array function which is used to filter out the array elements based on true false condition
// -> It return the value everytime 
// -> it will return us the new array without modifying the original
// -> we can chain methods in this, as it return anything

// Reduce():
// -> Whenever we want to reduce the size of array, or need to find max,min,sum,multiplication we used this
// -> it will return us the sinle value
// if we didn't define initial values of accumulator then it will take the first arrray element as accumulator
// and run the loop from the second element
// -> It's a array function which is used to sum/max/min/multiply out the array elements 
// -> It return the value everytime 
// -> we can chain methods in this, as it return anything


// You have an array of user objects. Filter out the users who are under 18 years old and
//  then map the remaining users to a new format.

const users = [
    { userId: 1, name: "John", age: 20 },
    { userId: 2, name: "Jane", age: 17 },
    { userId: 3, name: "Tom", age: 22 },
    { userId: 4, name: "Sara", age: 16 }
  ];
  
  const adults = users
    .filter(user => user.age >= 18) // Filter users who are 18 or older
    .map(user => ({
      userId: user.userId,
      name: user.name,
      adult: true
    })); // Map the filtered users to include `adult: true`
  
  console.log(adults);
  



//You have an array of products where each product belongs to a category. Group the products by category into an object.

const products = [
    { productId: 1, name: "Shampoo", category: "Personal Care" },
    { productId: 2, name: "Banana", category: "Fruits" },
    { productId: 3, name: "Toothpaste", category: "Personal Care" },
    { productId: 4, name: "Apple", category: "Fruits" },
  ];
  
  // {
  //   "Personal Care": [
  //     { productId: 1, name: "Shampoo" },
  //     { productId: 3, name: "Toothpaste" }
  //   ],
  //   "Fruits": [
  //     { productId: 2, name: "Banana" },
  //     { productId: 4, name: "Apple" }
  //   ]
  // }
  
  
  const ans = products.reduce((acc, curr, i)=> {
      if(acc[curr.category]){
          acc[curr.category] = [...acc[curr.category], {"productId": curr.productId, "name": curr.name}]
      }
      else{
          acc[curr.category] = [{productId: curr.productId, name: curr.name}]
      }
      return acc;
  },{})
  
  console.log(ans);


//You have an array of employees, where each employee has an id, name, and department. Create a new object where the key
//  is the employee id and the value is the employee's name.
  
  const employees = [
    { id: 1, name: "Alice", department: "HR" },
    { id: 2, name: "Bob", department: "IT" },
    { id: 3, name: "Charlie", department: "Finance" }
  ];
  
  // {
  //   1: "Alice",
  //   2: "Bob",
  //   3: "Charlie"
  // }
  
  
  const data = employees.reduce((acc, curr)=> {
       acc = {
           ...acc,
           [curr.id]: curr.name
       }
       return acc;
  },{})
  
  console.log(data);




  //You have an array of purchase transactions where each transaction has a userId and purchaseAmount.
//    Find the user with the highest total purchase amount.


const transactions = [
    { userId: 1, purchaseAmount: 200 },
    { userId: 2, purchaseAmount: 300 },
    { userId: 1, purchaseAmount: 150 },
    { userId: 3, purchaseAmount: 400 },
    { userId: 2, purchaseAmount: 100 }
  ];
  
  
  // { userId: 2, total: 400 }
  
  const maxAmount = transactions.reduce((acc,curr)=> {
      if(acc.purchaseAmount<curr.purchaseAmount){
          acc = curr;
      }
      return acc;
  })

  // ** Here we didn't define the acc initial value so it will take the initial value as it's first parameter**
  
  console.log(maxAmount)

//You have an array of transaction objects. Some transactions are duplicates, based on the transactionId. 
//Remove the duplicates from the array.


  const transactions2 = [
    { transactionId: 1, amount: 45.56 },
    { transactionId: 2, amount: 90 },
    { transactionId: 1, amount: 45.56 },
    { transactionId: 3, amount: 100 }
  ];
  
  // [
  //   { transactionId: 1, amount: 45.56 },
  //   { transactionId: 2, amount: 90 },
  //   { transactionId: 3, amount: 100 }
  // ]
  const singleData = Object.values(transactions2.reduce((acc, curr)=> {
      if(!acc[curr.transactionId]){
    acc[curr.transactionId]= {transactionId: curr.transactionId, amount: curr.amount}
      }
  
      return acc;
  }, {}))
  console.log(singleData)


//   Given an array of numbers, find the most frequent number and how many times it appears.

  const numbers = [1, 2, 3, 1, 2, 1, 3, 3, 3];

// { number: 3, count: 4 }


const countData = numbers.reduce((acc, curr)=>{
    if(acc[curr]) acc[curr] = acc[curr] +1;
    else acc[curr] =1 ;
    
    return acc;
},{})
console.log(countData)

let mostFrequent = {number: null, count: 0}

for(ele in countData){
    if(countData[ele]>mostFrequent["count"]){
        mostFrequent.number=ele
        mostFrequent.count=countData[ele];
    }
}
console.log(mostFrequent)