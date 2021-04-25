function addKeyAndValue(arrobj,key,val)
{
    for(obj of arrobj){
        obj[key] = val;
    }
    console.log(arrobj);
}


addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}],
"isInstructor", true)