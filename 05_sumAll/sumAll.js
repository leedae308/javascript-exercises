const sumAll = function (intA, intB) {
    let sum = 0;

    if (intA < 0 || intB < 0) return "ERROR"; //positive number check
    if (Number.isInteger(intA) && Number.isInteger(intB)) { //integer type check
        if (intB > intA) {
            for (let i = intA; i <= intB; i++) {
                sum += i;
            }
        }
        else {
            for (let i = intB; i <= intA; i++) {
                sum += i;
            }
        }
        return parseInt(sum);
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;


//pseudo code:
//input param : int A and int B;
//output param: single int;

//global variable to hold sum;

//for int i = A, while it is less than or equal to B, add to sum.
