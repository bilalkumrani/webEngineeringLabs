
let arr = [10,44,55,22,33,44,56];

let fun = (myArr) => {
    var sum=0;
    for(let i of myArr){
       sum +=i;
    }
    console.log("Sum is "+ ""+sum);
}

fun(arr);