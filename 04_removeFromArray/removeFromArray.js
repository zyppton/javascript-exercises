const removeFromArray = function(array, ...values) {
    let list = array;
    let listLength = list.length;
    for (const arg of values) {
        let remove = arg;


        for (let i = 0; i < listLength; i++){
            if (remove === list[i]) {
                list.splice(i, 1);
                i--;
            }
        }

    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
