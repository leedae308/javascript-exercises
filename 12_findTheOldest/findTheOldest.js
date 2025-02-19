const findTheOldest = function (people) {
    const noDeath = people.map(person => {
        if (person.yearOfDeath == null) {
            let today = new Date();
            person.yearOfDeath = today.getFullYear();
        }
    })
    const ageSort = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
    // console.log(ageSort[0]);
    return ageSort[0];
};


// const people1 = [
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]

// findTheOldest(people1)

// Do not edit below this line
module.exports = findTheOldest;
