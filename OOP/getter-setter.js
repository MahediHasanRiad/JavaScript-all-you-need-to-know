/** 
 *  getter = you can or read
 *  setter = you can also change value
 */

class Person{
    constructor(name, email){
        // _name == ( _ ) kind of privet (not really but mean to privet for other )
        this._name = name,
        this._email = email
    }

    // get == only read,,, cannot change
    get name(){
        return this._name;
    }
    // set == change value
    set name(value){
        if(value.toLowerCase() === 'riad boss') return
        return this._name = value
    }

    info(){
        console.log('This is', this._name, 'Email: ', this._email)
    }
}

const p1 = new Person('riad', 'riad@gmail.com')
// p1.info()

// getter
p1.name = 'change name'
p1.info()


// setter
p1.name = 'Riad Boss'
p1.info()

