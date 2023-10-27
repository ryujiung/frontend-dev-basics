/**
 * 구조 분해(Destructing)
 * 
 */

//ex01 - basic

const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const {firstName, lastName, email } = user;


console.log(firstName,lastName,email);

//ex2 - default value
const goods = {
    name: 'TV',
    price: 1000,
    countStock: 10
};

const { name, price, discountPrice, countStock=0,countSold =0} = goods;
console.log(name,price,discountPrice,countStock,countSold);

// ex3 - 구조 분해 대상이 되는 객체의 속성 이름과 변수 이름이 다를 경우
const person = {
    n: '마이콜',
    c: 'korea'
}

const {n: fullName, c:country} = person;
console.log(fullName,country);

//ex4 - 내부객체의 구조변화
const student = {
    name: '둘리',
    age: 10,
    score: {
        math: 30,
        korean: 100,
        science: 70
    }
};

const {
    name: studentName,
    scroe: {math,korean,science,music=0}
} = student;

console.log(`${student}의 점수
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);

//ex5 - 함수 파라미터

const averageScore = (student) => {
    return (math + korean + science + music) / 4;
};

console.log(averageScore(student));

//ex6 - 배열의 구조 분해 기본
const color = [155,200,75];
let [red, green, blue] = color;

console.log(red,green,blue);

//ex7 - 배열의 구조 분해: default value
const[,] 
