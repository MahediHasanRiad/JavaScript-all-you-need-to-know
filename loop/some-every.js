const arr = [2, 4, 1, 6, 8, 76, 5, 33, 45, 5, 7, 0, -4, 22, -5]

const mySome = arr.some(value => value % 2 === 0) // some number even ?
console.log(mySome) // true

const myEvery = arr.every(value => value % 2 === 0) // all number even ?
console.log(myEvery) // false