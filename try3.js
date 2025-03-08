let myname='Li'; //string Literal
console.log(myname);

let firstName='Qianrui', lastName='Li';

const interestRate=0.3;
console.log(interestRate);
let age=30; // number literal
let isApproved=false;//boolean literal
//let selectedColor=null;//when we want to clear the value of a variable

console.log(age, firstName);

//object literal
let person ={
    myname:'Mosh',
    age:20

};

//dot notation
person.myname='Li'

//bracket notation
let myn='myname';
person[myn]='li'

console.log(person)



//array literal
let selectedColors=['red','blue'];
selectedColors[2]=1;



console.log(selectedColors[0]);
console.log(selectedColors);
console.log(selectedColors.length);

function greet(newName,newLastName){
    console.log('Hello '+ newName+' '+newLastName);
}

greet('i','Li');


function sqaureNum(num1){
    return num1*num1;
}
console.log(sqaureNum(3));