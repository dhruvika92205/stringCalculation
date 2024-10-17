class stringCalculation{
    add(str) {
        if (str === '') return 0;
        let numStr = str;
        let delimiters = ',';

        if(str.startsWith('//')){
            const delimitersIndex =str.indexOf('\n');
            delimiters = str.substring(2,delimitersIndex);            
            numStr=str.substring(delimitersIndex+1);           
                     }


       numStr = numStr.replace(/\n/g, delimiters); 
        const numArray = numStr.split(delimiters);
        console.log(numArray);
        let sum = 0;
        for (const num of numArray) {
            const parsedNum = parseInt(num, 10);

           
                sum += parsedNum;
           
        }
       
 return sum;
    }
}

export default stringCalculation;