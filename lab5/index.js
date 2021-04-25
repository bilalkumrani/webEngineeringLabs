console.log("helo world nomi and malook how are you? are you enjoying this lecture?");

function hello(){
    alert("cxxx{}::::::::::::::::::::::::::::>");
}

let num = '3.14';
console.log(parseInt(num));

//difference bw number() and parseInt() or parseFloat()

//parse check only starting of the string if it found a number in starting it will parse it into num
//but number() checks the complete string if it find the mixed string it will not convert it into nm

//this is the alternate short hand of number()
console.log(+"1020");


const number = [1,2,3,4];
// num = [7,6,5,4] this is not allowed in constant array

// num[1] = 1 this is allowed in const array in javascript

// num.push("hello") it is allowed in const array in havascript
number.push("hello")


let arr = [1,4,3,5,3];
//splice() remove the element we give the indexes to-from and after this given elements will addin //that array we can add unlimmited argument  it will add if it //is not available in array
arr.splice(0,3,"wawa","hello","wow","zindabad");
console.log(arr);

delete arr[0]; //it will delete this position and it will be empty and then we can add other value 
console.log(arr);
arr[0] = "yaha per empt jaga thi";
console.log(arr);


// I have to study all variables loops and switches at my own


for (let i of arr){
    console.log(i);
}
let person = {
    name: "bilal",
    city : "pakistan",
    uni: "iba"
}
person["date of birth"] = "27.6.2000";
console.log(person);




// CXXX{}:::::::::::::::::::>