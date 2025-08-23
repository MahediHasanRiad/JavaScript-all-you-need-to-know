// [ call - apply - bind ] passing a object as a argument
// [call & apply] = instantly call function but [ bind ] function not call

function sum(c, d){
    console.log(this.a + this.b + c + d)
}

// call func => ({obj}, arg1, arg2 ...)
sum.call({a: 10, b: 15}, 10, 5)

// apply func => ({obj}, [arg1, arg2 ...])
sum.apply({a: 10, b: 15}, [10, 5])


// bind func => ({obj}, arg1, arg2 ...)
const bindObj = sum.bind({a: 10, b: 15}, 10, 5)
bindObj()
// or
const bindObj2 = sum.bind({a: 10, b: 15})
bindObj2(10, 5) // better option

