let find=(array)=>{
    var min=array[0];
    var count = 0;
    for (const key in array){
        if(array[key]<min)
            min = array[key];
    }
    for(var i=0; i<array.length; i++){
        if(array[i] === min)
            array[i] = -1;
    }
    
    return array
}
var nums = [1,2,3,4,0,-1,-100,-200,-300,-300];
console.log(find(nums));
