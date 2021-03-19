

let myobj = {
    id: 22,
    name : "Bilal",
    city : "Sukkur",
    age : 22
}


let myfun = (obj) =>{
    for(key in obj){
        if(typeof(obj[key])===typeof(""))
        console.log(obj[key]);
        
    }
}


myfun(myobj);