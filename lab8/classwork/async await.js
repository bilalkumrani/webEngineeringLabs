


async function bilal()
{
    console.log('this is inside bilal function')
    const response = await fetch('https://api.github.com/users');
    console.log("berfore response");
    const users  = await response.json();
    console.log("users resolved");



    return users;
}



console.log('before calling bilal');
let a = bilal();
console.log('after calling bilal');
console.log(a)
a.then((data)=>{console.log(data)})
console.log('last line of the file');
