function removeVowels(str)
{
    let arr = str.split('');
    let newArr =[]
    let count=0;
    let j;
    for(let i of arr)
    {
        j = i.toUpperCase();
        if(j==='A' || j==='E' || j==='I' || j==='O' || j==='U')
        {
            //do nothing
        }
        else{
            newArr[count++] = i;
        }
    }
    str = newArr.join('');
    return str;
}

console.log(removeVowels('Bakhtiar hussain'));