function specialMultiply(val1,val2){
    if(val1 && val2){
        return val1*val2;
    }
    else if(val1){
        return function(val2){
            return val1*val2;
        }
    }
    else{
        return function(val1){
            return val1*val2;
        }
    }
}

console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));

let func = specialMultiply(3);
console.log(func(4));
