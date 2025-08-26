class Person{
    constructor(name, phone, address){
        this._name = name,
        this._phone = phone,
        this._address = address
    }
     // if you want set func, you have to provide get func
     get name(){
        return this._name
    }
    set name(value){
        return this._name = value
    }
    get phone(){
        return this._phone
    }
    set phone(value){
        return this._phone = value
    }
    get address(){
        return this._address
    }

    personInfo(){
        console.log(`Name: ${this.name} Phone: ${this.phone} Address: ${this.address}`)
    }
}

export default Person