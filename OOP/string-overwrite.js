class StrOverwrite{
    constructor(name, email){
        this.name = name,
        this.email = email
    }

    // just convert [object Object] == something ....
    toString(){
        return 'String overwrite'
    }
}

const p1 = new StrOverwrite('riad', 'riad@gmail.com')

/** before toString() */
// console.log(p1 + '')     // [object Object]

/** after add toString() */
console.log(p1 + 'this')  // String overwrite