const findTheOldest = function(array) {

    // const currentDate = array.map(person => {
    //     if (person.yearOfDeath === undefined) {
            
    //     }
    // })

    const oldestList = array.sort((current, next) => {
        const currentYear = new Date().getFullYear();
        if (current.yearOfDeath === undefined) {
            if ((currentYear - current.yearOfBirth) > (next.yearOfDeath - next.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        } else if (next.yearOfDeath === undefined) {
            if ((current.yearOfDeath - current.yearOfBirth) > (currentYear - next.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            }
        } else {
            if ((current.yearOfDeath - current.yearOfBirth) > (next.yearOfDeath - next.yearOfBirth)) {
                return -1;
            } else {
                return 1;
            };
        }

    });
    return oldestList[0];
};


// const oldestList = array.sort((current, next) => 
//     (current.yearOfDeath - current.yearOfBirth) > (next.yearOfDeath - next.yearOfBirth) ? -1 : 1);
// return oldestList[0];

// Do not edit below this line
module.exports = findTheOldest;
