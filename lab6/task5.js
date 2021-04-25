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
