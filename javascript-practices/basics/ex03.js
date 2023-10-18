/**
 * undefined와 null의 동치(equals) 비교
 * 
 */

var myVar1 = undefined;  // 명시적으로 undefined 대입
var myVar2;             // 암시적으로 undefined 대입
var myVar3 = null;

console.log(myVar1,myVar2,myVar3);

console.log(myVar1 == myVar3);      //true:  값(의미) 비교, 즉, 변수의 값이 같은지를 확인합니다. 데이터 유형(타입) 간에 형 변환이 발생할 수 있습니다
console.log(myVar1 === myVar3);     // false: type 비교, 즉, 값과 데이터 유형이 모두 동일한 경우에만 참(true)으로 간주합니다.

console.log("=============================");

console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));
console.log('abc' === new String('abc')); //'abc'는 문자열 리터럴이고 String('abc')는 생성자 함수를 사용하여 string을 생성, 두 타입이 다르다!

console.log(true + 10);
console.log('abc' + new String('abc'));
console.log(1+'11');
console.log('11'+1);
console.log(parseInt('11')+1);

// ==

console.log('4' === 4);
console.log(true === 1);
console.log('abc' === 'abc');
console.log(new String('abc') === new String('abc'))
console.log(2 === 4);
console.log(new Number(10) === new Number(10));