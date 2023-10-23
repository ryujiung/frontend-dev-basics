
Array.prototype.remove = function(index){
    this.splice(index,1);
}

Array.prototype.insert = function(index, value){
    if(value instanceof Array){
        for(var i = 0; i < value.length; i++){

        }
    }else{
    this.splice(index,0,this.value);
    }
}

var a = [1,2,4];
console.log(a);

a.insert(2,3);
console.log(a);

