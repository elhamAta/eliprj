const myArray = ['ali',512, 'pli']
 
let push = (myArray, newItem) =>{
    const temp = [];
    for(var i =0; i < myArray.length; i++){
        temp[i+1] = myArray[i];
    }
    temp[0] = newItem;
    return temp
}

let pull = (myArray) => {
    myArray.length = myArray.length-1
    return myArray
}

//myArray = push(myArray,"first")
//pull(myArray)