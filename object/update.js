import { studentsArrayData, StudentsObjectData } from "./data.js";

/**
 * update in Array --> 0(n)
 */
const updatedData = {
  name: "updated name",
};

// const index = students.find((i) => i.id === 1);  // ❌ don't work
const index = studentsArrayData.findIndex((i) => i.id === 1);

studentsArrayData[index] = {
  ...studentsArrayData[index], // store previous all data
  ...updatedData,
};

// console.log(studentsArrayData);


/**
 * updated data in Object  --> 0(1)
 */

const updatedDataObject = {
    name: 'updated name'
}

StudentsObjectData['1'] = {
    ...StudentsObjectData['1'],
    ...updatedDataObject
}

console.log(StudentsObjectData)


/**
 * array vs object
 */

const data = {
  id: uuidv4(),
  value: 'text' 
}

console.time("array");

const arr = [];
for (let i = 0; i < 5000000; i++) {
  arr.push(data);
}

// const index = arr.findIndex(i => i.id === 4900000)
arr[4900000] = {
  ...arr[4900000],
  value: 'update text'
}

// console.log(arr)

console.timeEnd("array");

// try in object
console.time('object')

const obj = {}
for(let i = 0; i < 5000000; i++){
  obj[i] = data
}

obj[4900000] = {
  ...obj[4900000],
  value: 'update text'
}
// console.log(Object.values(obj))

console.timeEnd('object')

