const counterTextElement= document.querySelector('.js-counter-text');
const incrementbuttonElement= document.querySelector('.js-increment-btn');
const decrementbuttonElement= document.querySelector('.js-decrement-btn');

let counter=0;
incrementbuttonElement.addEventListener('click',function(){
    counter++;
    counterTextElement.textContent=counter;
});

decrementbuttonElement.addEventListener('click',function(){
    if(counter>0){    
        counter--;
        counterTextElement.textContent=counter;
    }

});

const ageInputElement= document.querySelector('.js-age-input');
const calculateButtonElement= document.querySelector('.js-calculate-btn');
const resultElement= document.querySelector('.js-result');

calculateButtonElement.addEventListener('click',function(){
    if (ageInputElement.value<0){
        resultElement.textContent='Age cannot be negative';
    }
    else if(!ageInputElement.value){
        resultElement.textContent='This field is required'
    }else{
        const age=ageInputElement.value;
        const dogAge=age*7;
        resultElement.textContent='Your age in dog years is' + ' '+ dogAge;
        
    }
})

