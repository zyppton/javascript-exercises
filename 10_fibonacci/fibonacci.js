const fibonacci = function(number) {
    // takes a nu
    const num = Number(number);
    let fib = [];
    // let curr = 1;
    let output = 0;

    if (num === 0){
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (n = 0; n < num; n++) {

            let curr = 0;
    
            if (n === 0 || n === 1) {
                curr = 1;
            } else {
                curr = (fib[n - 1] + fib[n - 2]);           
            }
    
            fib.push(curr);
        }
        return fib[num - 1];
    }

};


// Do not edit below this line
module.exports = fibonacci;


