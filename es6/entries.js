
const obj = {
    a: 10,
    b: 20
}
// convert in array
console.log(Object.entries(obj))  // [ [ 'a', 10 ], [ 'b', 20 ] ]

const obj2 = [
    ['a', 10],
    ['b', 20]
]
// convert in object
console.log(Object.fromEntries(obj2))  // { a: 10, b: 20 }