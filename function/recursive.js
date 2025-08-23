// loop using function
function allNum(n){
    if(n == 0){
        return
    }
    console.log(sumNum)
    sum(n - 1)
}
// allNum(10)

//*************************************************** */

// sum all number
function sumNum(n){
    if(n == 1){
        return 1
    }
    return n + sumNum(n - 1)
}

// console.log(sumNum(5))

//********************************************************* */

const arr = [1, 2, 3, 4, 5]

// sum array
function sumArr(arr, lastIndex){
    if(lastIndex == 0){
        return 1
    }
    return arr[lastIndex] + sumArr(arr, lastIndex - 1)
}
console.log(sumArr(arr, arr.length - 1))