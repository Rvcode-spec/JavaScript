function name(name, callback){
        console.log("Holle", name);
        callback();
}

function sayholle(){
    console.log("goodbay");
    
}

name("ravi",sayholle)


// Example with setTimeout (Asynchronous Callback):

function fetchData(callback){
    setTimeout(()=>{
        console.log("Data Fatch");
        callback();
    },1000)
}

function date(){
    console.log("Loding the Data......");
    
}

// fetchData(date);
date(fetchData) // Yeh koi argument accept nahi karta aur andar se fetchData ko call nahi kar raha.