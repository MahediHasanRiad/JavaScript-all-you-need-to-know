const age = 22;

// `` = you can write some logic
console.log(`i am ${age} years old, i am ${age > 18 ? '' : 'Not'} adult`)

////////////////////////////////////////////////////////

const name = 'riad'
/**
 *  padStart = ({length}, {which value})
 *  add in start
 */
console.log(name.padStart(10, '.')) // ......riad
console.log(name.padEnd(10, '.')) // riad......