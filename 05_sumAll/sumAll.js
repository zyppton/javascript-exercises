const sumAll = function(numOne, numTwo) {
    let sum = 0;

    if (numOne >= 0 && numTwo >=0 && Number.isInteger(numOne) && Number.isInteger(numTwo)) {
        if (numOne < numTwo) {
            for (let i = numOne; i <= numTwo; i++) {
                sum = sum + i;
            }
        } else {
            for (let i = numOne; i >= numTwo; i--) {
                sum = sum + i;
            }
        }   
        return sum;
    }else {
        return "ERROR";
    }


};

// Do not edit below this line
module.exports = sumAll;
