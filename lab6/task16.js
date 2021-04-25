function addKeyAndValue(objArr,key,val)
{
    let arr =[];
    for(let i of objArr){
        i[key] = val;
        arr.push(i);
    }
    return arr;
    
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],
"isInstructor", true));