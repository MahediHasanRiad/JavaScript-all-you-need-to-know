/* obstruction = can not access property out-site the function 
 kind of privet function, if you want obstruction than store in 
 a variable like = name ?? */

function obstruction(){
    const name = function(){
        console.log('This is name function')
    }

    this.info = function(){
        console.log('this is info')
        name()
    } 
}

const res = new obstruction()
res.info() 
// can not access name function