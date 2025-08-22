const arr = [1, 2, 3, 4, 5, 6]

const reduceArr = arr.reduce((acc, cur) => {
    
    return acc + cur
}, 0)

console.log(reduceArr)