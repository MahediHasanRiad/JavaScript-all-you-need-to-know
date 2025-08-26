
/**
    * [ general method ] need to create class Object like = new StaticFunc()
    * [ Static method ] no need class Object, Direct call from class, like = Static.equal()
*/

class StaticFunc {
    constructor(name, email){
        this.name = name,
        this.email = email
    }

    info(){
        console.log('My name is:', this.name, 'Email is:', this.email)
    }

    static equal(a, b){
        if(a.name !== b.name) return false
        if(a.email !== b.email) return false

        return true
    }
}

const s1 = new StaticFunc('riad', 'riad@gmail.com')
const s2 = new StaticFunc('shamim', 'riad@gmail.com')

s1.info() // general method
console.log(StaticFunc.equal(s1, s2)) // static method