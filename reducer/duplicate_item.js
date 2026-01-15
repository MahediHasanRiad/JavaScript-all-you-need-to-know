const data = [
    {id: 0, name: 'riad'},
    {id: 0, name: 'riad'},
    {id: 1, name: 'shamim'},
    {id: 2, name: 'tamim'},
    {id: 2, name: 'tamim'},
]

const result = data.reduce((acc, cur) => {

    if(!acc.some(item => item.id === cur.id)){
        acc.push(cur)
    }

    return acc 
}, [])

console.log(result)