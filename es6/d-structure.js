/**
 * multi label d-structure
 */

const info = {
    name: 'riad',
    age: 25,
    address: {
        city: 'chittagong',
        home: 'Dhaka'
    }
}

const { name, age, address: { city, home } } = info
console.log(name, age)