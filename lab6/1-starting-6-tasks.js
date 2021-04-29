// Task-1

countdown(10);
function countdown(number){


let id =    setInterval(()=>{
        if(number==0){
            console.log("Done...");
            clearInterval(id);
        }
        else{
            console.log(--number)
        }
},1000);

}


// Task-2
function isEven(num){
    return num%2==0;
}

console.log(isEven(10));


// Task-3
function isOdd(num){
    return num%2!==0;
}
console.log(isOdd(2));

// Task-4
function isPrime(num){
    isPrime = true;
    if(num==1){
        console.log('1 is not prime')
        return;
    }
    else if(num>1){
        for(let i=2; i<num; i++){
            if(num%i==0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

console.log(isPrime(8));

// Task-5

function isPrime(num){
    isPrime = true;
    if(num==1){
        console.log('1 is not prime')
        return;
    }
    else if(num>1){
        for(let i=2; i<num; i++){
            if(num%i==0){
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}


function isOdd(num){
    return num%2!==0;
}

function isEven(num){
    return num%2==0;
}







function numberFact(num,func){
    return func(num);
}





console.log(numberFact(59,isEven));
console.log(numberFact(59,isOdd));
console.log(numberFact(59,isPrime));




// Task-6
function find(arr,func){
    return arr.find(func);
}

let firstVall = find([8,11,4,27], function(val){return val >= 10});

console.log(firstVall);