// we delayed it manually, now think if we called an api from server and that is taking time like this so we will seee how we will tackle this problem

function getData(){
    setTimeout(()=>{
        return 2;
    },2000)
}

function getMoreData(x){
    setTimeout(()=>{
        return x+3;
    },3000)
}

function printSum(a,b){
    return a+b;

}

let x = getData();
let y = getMoreData(x);
console.log('sum is : ' + printSum(x,y));







// promises are the common way of dealing with asynchronous code. Promises make use of callback functions but help avoid deep nesting of callbacks and improve readablity. they are immuatable, so once a promise is done, you cannot accidiently call it again

// A promise is an object that will return a value in future.

// ::::This is better defination..
//promises are used to handle asynchronous operations in javascript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to a unmanageable code.

/*



- A promise is an object that keep track about weather a certain event has happend already or not.

- Determines what happens after event has happend.

-> There are three stages in promises
- pending
- resolved
- reject



- A function be executed by the constructor, during the process of constructing the probj1.
The executer is the custom code that ties an outcome to a promise.
You the programmer write the executer.
syntax:


const probj1 = new Promise(executer)
---> producing promise <----
const probj1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let arr = [1,2,3,4,5];
        resolve(arr) -> to show its output then() will be used
        reject('Error cant fetch desired thing') -> catch() will be used to get this
    },2000);
})

whe we call the promise functin we have two functions:
- then() 
- catch()
promise().then() promise().catch() and promise().finally() are used to associat further actions with a promise that becomes settled.


--> comsuming promise <--
probj1.then((rollNo)=>{
    ( Jo resolve me argument bheja wo rollNo ne get karliya)
})


*/



const probj1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let arr = [1,2,3,4,5];
        //resolve(arr) 
        reject('Error cant fetch desired thing');
    },2000);
})

probj1.then((rollNo)=>{
    console.log(rollNo);
})

probj1.catch((msg)=>{
    console.log(msg);
})


// An other Example:

function buyCake(type)
{
    return  new Promise((resolve,reject)=>{
        if(type==='coffee')
         resolve("Job done");
        else
        reject('NOT done');
    })
}



buyCake('coffe').then((res)=>{ console.log(res).catch((err)=>{console.log(err)})
})