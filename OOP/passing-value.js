/* if you passing any [integer / null / boolean] as a argument, its can not change in main value,,
    this is passing by value */

const n = 10
function sum(n){
    n = n + 10
    return console.log(n)
}
sum(n)
console.log(n)

//************************************************* */

/*  if you passing any object as a argument, it can change in main object
  because object passing a [ref / key] as a argument */

const info = {
    name: 'riad',
    age: 15
}
function infoFunc(info){
    info.name = 'shamim',
    info.age = 21
    console.log(info)
}

infoFunc(info)
console.log(info)
