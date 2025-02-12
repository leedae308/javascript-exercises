const removeFromArray = function(array) {

    const resultArray = [];

    if(arguments.length==1)
    {
        return array;
    }
    for(let i = 0 ; i < array.length ; i++)
    {
        for(let j = 1 ; j < arguments.length; j++)
        {
            if(array[i]===arguments[j])
            {
                delete(array[i]);
                continue;
            }
        }
    }

    array.forEach((element)=>{
        if(element!=undefined) resultArray.push(element);
    })

    return resultArray;

};

// Do not edit below this line
module.exports = removeFromArray;


//Pseudocode
//inputParams: array, ...nums
//outputParam: resultArray

//delete all values of equal to nums -> leaves hole of und.
//result array -> move everything that the value is not und.