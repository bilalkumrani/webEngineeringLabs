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