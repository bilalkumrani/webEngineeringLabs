function valTimesIndex(numArr)
{   
    let mulArr = numArr.map((x,index)=>{
        return x*index;
    })

    return mulArr;
    
}
console.log(valTimesIndex([1,2,3]));