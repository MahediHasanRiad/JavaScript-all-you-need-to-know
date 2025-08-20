const array = [1, 2, 3]
const array2 = array    // array reference 
array2[1] = 55       // it change also in main array

console.log(array)
console.log(array2)


// array is mutable, but if you change from clone that it does not any effect in main array
const arr = [1, 2, 3]
const arr2 = Array.from(arr) // clone array
arr2[1] = 5             // does not change main array

console.log(arr)
console.log(arr2)

/////////////////////////////////////////////////////////////////////////////////////////


