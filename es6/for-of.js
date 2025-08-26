const arr = [1, 2, 3, 4, 5]

for(let a of arr){
    // console.log(a)
}

for(let a of 'My name is riad'){
    // console.log(a)
}
//********************************************* */

const obj = {
    name: 'riad',
    age: 25,
    address: {
        city: 'dhaka'
    }
}

for(let a in obj){
    console.log(a)
}