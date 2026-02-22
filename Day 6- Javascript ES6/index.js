//Arrow functions and template literals
const greet = (name) => {
   // console.log(`Hello, ${name}`);
};
greet('Nikisha');

//array methods
//push and pop
const numbers=[1,2,3,4,5]
numbers.push(10);
//console.log(numbers);

numbers.pop();
//console.log(numbers);

//Map
const numberList=[10,20,35,60,55]
 const doubleNumbers = numberList.map((number) => {
    return number*2;
});
//console.log(doubleNumbers);

//Filter
const evenNumber = numberList.filter((number) => {
    return number%2===0;
});
//console.log(evenNumber);

//Reduce
const totalSum = numberList.reduce((accumulator,currentValue) => {
    //console.log(accumulator,currentValue);
    return accumulator+currentValue;
},0);
//console.log(totalSum);

//Slice and splice
const fruits=['Apple','Banana','Cherry','Mango'];

//Slice (include,exclude)
const slicedFruits=fruits.slice(1,3);
//console.log(slicedFruits);

//Splice (start,remove upto this)
const splicedFruits=fruits.splice(1,2,'Orange','Pineapple');
//console.log(splicedFruits);
//console.log(fruits);

//Spread Operator
const names=['Alice','Bob','Charlie'];
//console.log(...names);

const updatedNames=[...names,'David','Eve'];
//console.log(updatedNames);

const user= {
    name:'Nikisha',
    age:20,
    address:'Khusibun,Kathmandu',
};

const updatedUser={...user,isStudent: false};
//console.log(updatedUser);

//Destrcuturing
const [firstName,secondName]= names;
//console.log(firstName,secondName);//array

const {name,address}=user;
//console.log(name,address);//object
