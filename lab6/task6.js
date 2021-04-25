function find(arr,func){
    return arr.find(func);
}

let firstVall = find([8,11,4,27], function(val){return val >= 10});

console.log(firstVall);