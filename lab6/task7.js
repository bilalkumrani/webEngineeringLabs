function findIndex(arr,func){

   return arr.findIndex(func);
}
let val = findIndex([8,11,4,27], function(val){return val >= 10});
let val1 = findIndex([8,11,4,27], function(val){return val === 7});
console.log(val);
console.log(val1);