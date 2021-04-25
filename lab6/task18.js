function vowelCount(str)
{
   let strobj = {};
    let arr = str.split('');
    for(let val of arr)
    {
        val = val.toUpperCase();
        if(val==='A' || val==='E' ||val==='I' ||val==='O' ||val==='U'){
            if(strobj[val]){
                strobj[val] +=1;
            }
            else{
                strobj[val] =1;
            }
        }
    }
    return strobj;
}

console.log(vowelCount('Bakhtiar hussain'))