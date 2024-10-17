import express from 'express';
import stringCalculation from './stringCalculation.js';

const calculator =new stringCalculation();
console.log(calculator.add(''));

app.listen(3000,()=>{
    console.log(`Server running `);
})


const app = express(); 