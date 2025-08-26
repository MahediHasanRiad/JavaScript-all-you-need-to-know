import Person from './person.js'

class Student extends Person{
    constructor(name, phone, address, department){
        super(name, phone, address)
        this._department = department
    }
   
    get  department(){
        return this._department
    }
    
    studentInfo(){
        super.personInfo()
        console.log(`my name is: ${this.name}, Phone: ${this.phone}, Address: ${this.address}, Department: ${this.department}`)
    }
}

const s = new Student('riad', '012345678989', 'Dhaka', 'CSE')
s.name = 'tamim' // update
// s.department = 'Computer' // can not update
s.studentInfo()


export default Student