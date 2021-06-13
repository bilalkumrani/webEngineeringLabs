/*

::: Spread Operator :::
- spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in variable array where there is more than 1 values are expected. It allows us the privillage to obtain a list of parameters from an array. syntax of spread operator is same as Resp parameter but it works completely oposite of it.

function sum(a,b,c)
{
    console.log(a+b+c);

}
let vals = [2,3,4];
sum(...vals)  --> Now it will send the array in the parameters as single single value.


- we can also cocate arrays eaily with the help of spread operator

let vals1 = [1,2,3,4,5];
let vals2 = [6,7,8,9,10];
let vals3 = [...vals1,...vals2];
console.log(vals3)
see how much simple it isss wowww



*/



