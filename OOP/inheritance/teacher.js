import Person from './person.js'

class Teacher extends Person{
    constructor(name, phone, address, department, subject){
        super(name, phone, address)
        this._department = department,
        this._subject = subject
    }
   get department(){
    return this._department
   }
   get subject(){
    return this._subject
   }

    teacherInfo(){
        console.log(`Name: ${this.name} Phone: ${this.phone} Address: ${this.address} Department: ${this._department} Subject: ${this._subject}`)
    }
}

const t = new Teacher('Riad', '01856456589', 'Dhaka', 'CSE', 'Computer')
t.name = 'shamim' // update
// t.address = 'CTG' // do not update
t.teacherInfo()

export default Teacher