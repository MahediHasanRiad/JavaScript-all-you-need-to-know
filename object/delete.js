import { studentsArrayData, StudentsObjectData } from "./data.js";
import { v4 as uuidv4 } from 'uuid';
/**
 * array delete --> 0(n)
 */
const index = studentsArrayData.findIndex(i => i.id === 1)
studentsArrayData.splice(index, 1)

// console.log(studentsArrayData)


/**
 * object delete 0(1)
 */

delete StudentsObjectData['1']
// console.log(StudentsObjectData)


/**
 * array vs object
 */

console.time('array')

const array = []
for(let i = 0; i < 500000; i++){
    array.push({
        id: uuidv4(),
        value: 'text'
    })
}
const indexID = array.findIndex(i => i.id === 490000)
array.splice(indexID, 1)
// console.log(array)

console.timeEnd('array')

console.time('obj')

const obj = {}
for(let i = 0; i < 500000; i++){
    obj[i] = {
        id: uuidv4(),
        value: 'text'
    }
}
delete obj[490000]
// console.log(Object.values(obj))

console.timeEnd('obj')