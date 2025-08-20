const obj = {
    a: 10,
    b: 20,
    c: 30
}

//******************************************** */
// 'a' has in obj object?
console.log('a' in obj)  // true

//********************************************** */

// loop in object
for(let i in obj){
    console.log(i)
}
//*********************************************** */

// all keys & values from obj
console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)) // [ 10, 20, 30 ]

//*********************************************** */

