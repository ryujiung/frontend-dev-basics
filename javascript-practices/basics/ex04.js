/**
 * 변수의 범위(scope)
 * 
 * 1. 자바스크립트는 기본저긍로 코드에서 변수의 범위를 알 수 있다.(정적 스코프, Lexical Scope)
 * 2. 자바스크립트의 scope
 *  1) 전역범위
 */

var i = 20;
var f = function(){
    var i = 20;

    j=100;
    console.log(i);
    i = j - i;
}

f();
console.log(i);
console.log(j);

console.log("=== var 키워드는 함수 블록에서만 범위를 만든다.");
if(90 + 10 === 100){
    var k =10;
}

console.log(k);

{
    let x = 1000;
    const PI = 3.14;

    x = 100;
    PI = 0;
}

