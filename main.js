
const data = [0, 2, 3];
    console.log(data[0]);

    const dataObj = {0:7, 1:"key", "pet": "kacinas"};
    console.log(dataObj);
    console.log(dataObj.pet, dataObj['pet']);
    console.log(Object.keys(dataObj));
    
    let keys = Object.keys(dataObj);

    for(let i = 0; i < keys.length; i++){
        console.log("i yra:" + i);
        let key = keys[i];
        console.log(dataObj[key]);
    }   

    //data whoman in in data.js

    console.log(whoman.runDates);
    for (let i = 0; i < whoman.runDates.length; i++) {
        console.log(whoman.runDates[i]);
        
    }

//Data woman in data.js

let pet = woman.pet;
keys = Object.keys(pet);

for (let i = 0; i < keys.length; i++) {
   keys = keys[i];
   console.log("i-"+i+" key-"+keys+" value-"+pet[keys]);
}