const myAsyncDn = function(param, callback) {
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
 
 // usage 2 
const ex03 = async function(){
    const result = await myAsyncDn('data');
    console.log(result);
}

 ex03();
 console.log('wait....');

