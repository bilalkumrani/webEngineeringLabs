function printObject(sampleObject){
    for(var values in sampleObject){
        if(typeof sampleObject[values] === "object"){
            printObject(sampleObject[values])
        }else{
            console.log(`keys are: ${values} and values are ${sampleObject[values]}`);
        }
    } 
}

var obj = {
    1:'Bilal',
    2:"khan",
    3: {
        'name':'Bilal',
        'cms':'023-18-0042',
    }
}
printObject(obj);


