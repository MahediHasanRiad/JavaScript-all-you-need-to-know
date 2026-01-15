const data = [
    {name: 'OPPO', category: 'mobile'},
    {name: 'mi', category: 'mobile'},
    {name: 'hp', category: 'leptop'},
    {name: 'navy force', category: 'watch'},
    {name: 'acer', category: 'leptop'},
    {name: 'fox', category: 'watch'}
]

const result = data.reduce((acc, cur) => {

    if(acc.includes(cur.category)){
        
    }else{

    }

    return acc
}, [])

console.log(result)