const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = []

// reverse array
for(let i = arr.length - 1; i >= 0;  i-- ){
    arr2.push(arr[i])
}

// console.log(arr2)


///////////////////////////////////////////////////////////////////////////////////////////////

// prime number
const isPrime = 48;
let flag = true

for(let i = 2; i < isPrime; i++){
    if(isPrime % i === 0){
        console.log('not prime')
        flag = false
        break
    }
}

if(flag){
    console.log('Prime')
}
