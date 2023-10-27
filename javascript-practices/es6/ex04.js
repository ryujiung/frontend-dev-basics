/**
 * default parameter
 * 
 */

//const print = function(str, );

const print = function(strs, end = '\n'){
    console.log(strs.join(end));
}

print(['Always','with','me']);