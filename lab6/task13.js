function extractKey(objArr,key)
{   let arr =[];
    for(let i of objArr){
        arr.push(i[key]);
    }    
    return arr;
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim",
isInstructor:true},{name: "Matt", isInstructor:true}], "name"));
