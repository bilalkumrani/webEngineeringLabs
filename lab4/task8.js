function myfun(list){

    for(let i of list){
        if(Number(i)){
            return list;
        }
        else{
            continue;
        }
    }
}

console.log(myfun(["bilal","sukkur","IBA",2,3]));