// push
// pop
// shift
// unshift

const arr = [1, 2, 3, 5, 3, 7, 8, 4, 54]
arr.push(99)
// console.log(arr)    // add in last

arr.pop()
// console.log(arr)    // remove from last

arr.shift()
// console.log(arr)    // remove from 1st

arr.unshift(11)     
// console.log(arr)    // add in 1st

arr.splice(5, 0, 555)       
// console.log(arr)       // {index where to start}, {how many items to remove}, {items to add }


// new array 
const newArray = new Array()
newArray.push(12)
newArray.push(15)
// console.log(newArray)
