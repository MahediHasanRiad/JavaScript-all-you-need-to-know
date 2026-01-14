const promiseTest = new Promise(function (resolve, reject) {
    /**
     * use setTimeOut => bcz, promise do not exicute imidiately 
     * promise completed in future
     */
    setTimeout(function(){
        console.log('this is promise')
        resolve() // in call this method, that exicute then function
    }, 2000)
})

promiseTest.then(function(){
    console.log('promise resolved')
})


/** ------------------ another way -------------------- */

new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log('another promise')
        resolve()
    }, 3000)
}).then(() => {
    console.log('another promised resolved')
})