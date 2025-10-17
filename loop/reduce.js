const arr = [13, 52, 32, 48, 65, 76, 54, 33, 21]

const reduceArr = arr.reduce((acc, cur) => {
    
    return acc + cur
}, 0)

// console.log(reduceArr)

/** filter */ 

const filterArr = arr.reduce((acc, cur) => {
    if(cur % 2 === 0){
        acc.push(cur)
    }
    return acc
}, [])

// console.log(filterArr)

/** max value */
const maxValueResult = arr[0]
const maxValue = arr.reduce((acc, cur) => {
    if(acc < cur){
        acc = cur
    }
    return acc
}, arr[0])

// console.log(maxValue)

/** count total character in array */

const totalCharacter = ["apple", "banana", "kiwi"];

const characterValue = totalCharacter.reduce((acc, cur) => {
    acc += cur.toString().length
    return acc
}, 0)

// console.log(characterValue)

