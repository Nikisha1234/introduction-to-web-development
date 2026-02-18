//Variables in Javascript
//lower camel case =fullName
var fullName= 'Nikisha Maharjan';
let address= 'Khusibun, Nepal';
const bloodGroup= 'O+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//Datatypes
let name ='Nikisha';
let age= 20;
let isStudent=true;
let hobbies=['coding','travelling','cooking'];

console.log(hobbies[0]);

//Objects
let user={
    name:'Nikisha',
    age: 20,
    isStudent:false,
    hobbies: ['coding','travelling','cooking'],
};

console.log(user['name']);
console.log(user.age);

//Functions
function greet(name){
    console.log('Hello',name);
}
greet('Nikisha');

//DOM Manipulation
const headingElementById =document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByQuery =document.querySelector('#heading-2');
const paragraphElement=document.querySelector('.para');

paragraphElement.textContent='This is updated paragraph';
paragraphElement.style.color='blue';

const buttonElement= document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert('Button CLicked!');
    console.log('Button CLicked');

});

