import express from 'express';
import stringCalculation from './stringCalculation.js';

const app = express(); 
const calculator =new stringCalculation();
try{
    console.log(calculator.add(''));
    console.log(calculator.add("1"));  
    console.log(calculator.add("1,5"));
    console.log(calculator.add("1\n2,3"));
    console.log(calculator.add("//;\n1;2")); 
    console.log(calculator.add("'1,-2,3,-4'")); 
}catch(e){
console.log(e);
}


app.listen(3000,()=>{
    console.log(`Server running `);
})


