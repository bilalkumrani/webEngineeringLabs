function printFirstAndLast(objArr){

    for(i of objArr)
    {
        console.log(i.name);
        console.log(i.cms);
    }
}


let arr = [
    {name:'bilal',age: '23',cms:'023-18-0042'},
    {name:'Nouman',age: '20',cms:'023-18-0026'},
    {name:'Umair',age: '26',cms:'023-18-0040'}
    ];
    printFirstAndLast(arr);
