const info = [
    {
        id: 1,
        name: 'riad'
    },
    {
        id: 2,
        name: 'shamim'
    }
]

const findObj = info.find(value => value.id == 1)
console.log(findObj) // { id: 1, name: 'riad' }

const findIndexObj = info.findIndex(value => value.name === 'shamim')
console.log(findIndexObj) // 1


