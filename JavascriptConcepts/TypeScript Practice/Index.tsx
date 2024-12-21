// Typescript is transpiled into js first then the js code will get run in the browser


// declare variable in ts

let data1: string = "this is a data";
let data2: number = 23;
let data3: boolean = true;
console.log(data1,data2,data3);


// Use if "ANY" keyword 

let data4:any = "this is a any keyword";
data4=34;
console.log(data4);

// Function in TypeScript

// if function is not returning anything then we can pass the return type as "void"
function dummyData(name: string, age: number): void {
    console.log(`My Name is ${name} and Age is ${age}`)
}
dummyData("Aakash",23);

// if function is returning anything then we can pass the return type after the braces
function dummyData1(name: string, age: number): number {
    console.log(`My Name is ${name} and Age is ${age}`)
    return age;
}
dummyData("Aakash",23);

// Function returning Object

function returnObj(name:string, age:number):{ name: string, age: number} {
    return {
        name:"",
        age: 10
    }
}
const ans:{} = returnObj("aakash", 33);
console.log(ans);

// *HOW TO CREATE TYPE IN TS*

type User = {
    readonly _id: number;  // as we declare this field as readonly so we can't change it now
    name: string;
    age: number;
    isActive: boolean;
}

const data5:User = {
    _id: 23,
    name: "aakash",
    age: 23,
    isActive: true
}
console.log(data5)

// use of '&' in type

type UserCard = {
    CVV: number;
    CardNumber: number;
}

// we need to declare all the fields present in UserCard And User 
const userAndCardData: User & UserCard = {
      _id: 23,
    name: "aakash",
    age: 23,
    isActive: true,
    CVV: 2334,    
    CardNumber: 13224
}
console.log(userAndCardData);

// // use of '|' in type -
// > we can pass the keys in a object present in both the types
// -> or we can pass keys of either any one type present but it should be all the keys of any type

const userAndCardData1: User | UserCard = {
      _id: 23,
    name: "aakash",
    age: 23,
    isActive: true,
    CVV: 2334,    
    CardNumber: 13224
}
console.log(userAndCardData1);

let score: string | number = 33;
console.log(score);
score = "abc";
console.log(score);


//  *ARRAY DECLERATION IN TS*

const arr: number[] = [1,2,3,4,5]

const newArr:number[] = arr.map((ele:number):number => {
  return ele
})
console.log(newArr);


// In case need to declare array of number or string
let arr4: number[] | boolean[] = [true, false, true, false];
arr4 = [1,23,4,5,6];
// arr4 = [true,3,5,false] // not possible
console.log(arr4);

// In case need to declare array of number and string both in a single array
const arr5: (number | string)[] = [23,45,"sndsk","ssdjvbs", 13];
console.log(arr5);

// In case we need to declare type of every element specifically
let arr6: [string, number] = ["aakash", 23];
console.log(arr6);

// enum 

enum Country {
    INDIA= "India",
    USA= "usa",
    AUSTRALIA= "Australia",
    NEW_ZELAND= "New-Zealand",
}

const countryData: string = Country.INDIA;
console.log(countryData)


enum Seat {
    FRONT=1,
    MIDDLE,
    LAST
}

const seatData: number = Seat.MIDDLE;  // it's value will become 2 as ts internally increment the value
console.log(seatData)

// Object

type dData = {
 name: string;
 age: number;
 fn: ()=> string
}
const objData : dData  = {
    name: "aakash",
    age: 23,
    fn: () => {
        return ""
    },
    // fn(){
    //     return ""
    // }
}
console.log(objData);



// Interface

interface githubInterface {
    githubToken: string;
    jwtToken: string
}

interface userInterface {
    userToken: number;
}

interface unionInterface extends githubInterface, userInterface {
     userId: number;
}

const objGithubData: unionInterface = {
   userId: 34,
   githubToken: "a,s,cnaskjcnskjcn",
   jwtToken: "ascjkbaskjcnas",
   userToken: 13124423
}

console.log(objGithubData);

// *Difference between INTERFACE and TYPE*

// type is used for complex data types and interface is used for simple data types
// we can perform union and intersection operation in type but in Interface we can't do it, we can only extends it using extend Keyword


// **Generic Function (Imp)**

// The main use of Generic function is we can pass any type of data and return the same type of data - so by this we can do the type checking instead of using "any" as type 
function identifyType<T>(val: T):T {
    return val;
}
console.log(identifyType(23));
console.log(identifyType("aakash"));
console.log(identifyType(true));

function anotherFunction<T,U>(val: T, newVal: U): {} {
    return {
        value: val,
        newVal: newVal
    }
}

console.log(anotherFunction("aakash",23));



