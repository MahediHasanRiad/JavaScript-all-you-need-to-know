const arr = [1, 2, 3, null, false, 5, '', 'test', 6, 7 ]

for(let i = 0; i < arr.length; i++){
    if(typeof i !== 'number'){
        console.log('number')
    }
}

console.log('arr', arr)

