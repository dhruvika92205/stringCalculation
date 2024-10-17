import { expect } from 'chai';  
import stringCalculation from './stringCalculation.js';

describe('stringCalculation', function(){
    const calculator =new stringCalculation();

    it('return 0 for empty string', function() {  
        expect(calculator.add('')).to.equal(0);  
    });  

    it('return same for single number passed', function() {  
        expect(calculator.add('1')).to.equal(1);  
    }); 

    it('return sum of number if two passed in string', function() {  
        expect(calculator.add('1,5')).to.equal(6);  
    }); 

    it('handle new lines between numbers, return sum of number', function() {  
        expect(calculator.add('1\n2,3')).to.equal(6);  
    }); 

    it('support custom delimiters', function() {  
        expect(calculator.add('//;\n1;2')).to.equal(3);  
    }); 

    it('Throw erro for multiple negative number', function() {  
        expect(() => calculator.add('1,-2,-3')).to.throw('negative numbers not allowed: -2, -3');    
    }); 
}

)