
countdown(10);
function countdown(number){


let id =    setInterval(()=>{
        if(number==0){
            console.log("Done...");
            clearInterval(id);
        }
        else{
            console.log(--number)
        }
},1000);

}