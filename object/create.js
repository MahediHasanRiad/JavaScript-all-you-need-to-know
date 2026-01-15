import { studentsArrayData, StudentsObjectData } from "./data.js";
import { v4 as uuidv4 } from 'uuid';

/**
 * create in Array [push 0(1), unshift n(1)]
 */
const newDataArray = {
  id: 5,
  name: "riad",
  age: 26,
  grades: [92, 88, 95],
  city: "Chittagong",
};

studentsArrayData.push(newDataArray);
studentsArrayData.unshift(newDataArray);

// console.log(studentsArrayData)

/**
 * create in Object --> 0(1)
 */

const newDataObject = {
  id: 5,
  name: "riad",
  age: 26,
  grades: [92, 88, 95],
  city: "Chittagong",
};

StudentsObjectData[newDataObject.id] = newDataObject;

// console.log(StudentsObjectData)


/**
 * testing array vs Object
 */

console.time('arr')

const array2 = []
for(let i = 0; i < 5000; i++){
  array2.push(i)
}
array2[4900] = 5555555
console.log(array2)

console.timeEnd('arr')



console.time('obj')

const obj2 = {}
for(let i = 1; i < 5000; i++){
  obj2[i] = i
}
obj2[4900] = 5555555
console.log(Object.values(obj2))

console.timeEnd('obj')