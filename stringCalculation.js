class stringCalculation{
    add(str) {
        if (str === '') return 0;
        let numStr = str;
        let delimiters = ',';

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