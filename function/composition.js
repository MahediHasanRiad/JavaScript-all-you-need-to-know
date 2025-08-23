// if 1st function = 2nd function output than its call "function composition" 

function printA(inp){
    console.log("this is call composition result: ", inp)
}

function sumNum(n){
    return n + n
}

function total(a, b){
    return a + b
}
// if 1st function = 2nd function output than its call "function composition" 
printA(sumNum(total(5, 10)))
