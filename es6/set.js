/**
 * [ set ] does not store duplicate number
 */

const set = new Set([1, 2, 2, 3, 4, 4])

set.add(10)  // push
set.clear()    // create all data
set.delete(1)   // delete item
set.has(4)      // check any value 


// console.log(set) // Set(4) { 1, 2, 3, 4 }