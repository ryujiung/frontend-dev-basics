const myAsyncFn = function(param, callback) {
   return new Promise(function(resolve,reject){
    setTimeout(function() {
        if(param === 'data') {
            resolve('ok');
        } else {
            reject(new Error('fail'));
        }    
    }, 2000);
   });     
}

// usage
myAsyncFn('data')
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.error(err);
    });

console.log('wait....');