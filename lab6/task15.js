function filterKey(objArr,key)
{
    let arr =[];
    for(let i of objArr){
        if(i[key]){
            arr.push(i);
        }
    }
    return arr;

}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious:
false},{name: "Tim", isInstructor:true, isHilarious: true},{name:
"Matt", isInstructor:true}], "isHilarious"))

// [{name: "Tim", isInstructor:true, isHilarious:true}]