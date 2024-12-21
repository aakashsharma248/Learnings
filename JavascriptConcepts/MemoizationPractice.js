
function cacheFindSqaure() {
    const cache= {};
    
   function findSquare(ele) {
   // console.log(typeof ele);
   if(cache[ele]) return cache[ele];
   
   const currentTime = Date.now();
   let updatedTime = currentTime;
   
   while(currentTime+2000>updatedTime){
       updatedTime= Date.now();
   }
   
   const square = Math.sqrt(ele);
   cache[ele] = square;
   //   console.log(typeof square,"square");
   return square;
  }
  
   return findSquare;
}


const answeredFunction = cacheFindSqaure();
console.log(answeredFunction(25));
console.log(answeredFunction(25));
console.log(answeredFunction(25));
console.log(answeredFunction(25));
