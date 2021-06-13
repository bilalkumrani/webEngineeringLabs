function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("First is done value 2 is being sent");
            resolve(2);
        },4000)

    })
}

function getMoreData(preData){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`${preData} has recived compution is being performed`);
            resolve({x:preData, y:preData+3});
        },5000)


    })
}

function sumData(obj){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('everything is runing smoothly and we are about to print the sum of two numbers');
            let sum = obj.x + obj.y;
            console.log(sum);
            resolve();

        },5000)
    })

}


getData().then(getMoreData).then(sumData);