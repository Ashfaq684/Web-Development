const PromiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB call, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
    }, 1000)
})

PromiseOne.then()