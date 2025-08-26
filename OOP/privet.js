/**
 * variable define out of the class
 * privet property => const _name = Symbol('description')
 * key define => { this[_name] = name } not { this._name = name }
 */

// privet property
const _name = Symbol('name')
const _age = Symbol('age')
const _phone = Symbol('phone')

class Privet{
    constructor(name, age, phone){
        // key define
        this[_name] = name,
        this[_age] = age,
        this[_phone] = phone
    }

    info(){
        console.log(`Name: ${this[_name]}, Age: ${this[_age]}, Phone: ${this[_phone]}}`)
    }
}

const p = new Privet('riad', '26', '01856489756')
p.info()