// unlimited peramiter can pass
function sum(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
// sum(10, 50, 20, 50)

// or
function abc(...num){
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    console.log(sum)
}
// abc(10, 25, 25)

//******************************************************************* */