function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUsername(username)

    this.email = email 
    this.password = password
}

const abc = new createUser('riad', 'riad@gmail.com', '12345678')
console.log(abc)