/**
 * spread operator == (...num) when use as a function parameter 
 * rest operator == others all time
 * if you spread any array / object, and if you change, it does not effect on the main element
 */

// spread operator
function sum(...num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum
}
// console.log(sum(1, 2, 3, 4, 5))

//************************************************************ */

// rest operator
const obj = {
    name: 'riad',
    age: 15
}
const obj2 = {
    ...obj
}
obj2.name = 'shamim'

console.log(obj2)       // { name: 'shamim', age: 15 }
console.log(obj)        // { name: 'riad', age: 15 } main obj not change

// or 

const obj3 = {
    name: 'riad',
    age: 15
}
const obj4 = obj3
obj4.name = 'shamim'

console.log(obj4)       // { name: 'shamim', age: 15 }
console.log(obj3)        // { name: 'shamim', age: 15 } main obj change

//********************************************************************************* */