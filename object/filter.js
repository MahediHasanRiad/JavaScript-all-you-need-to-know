import { StudentsObjectData } from "./data.js";

/**
 * filter in Object
 */

const riad = Object.values(StudentsObjectData).filter(item => item.name === 'riad')
console.log(riad)