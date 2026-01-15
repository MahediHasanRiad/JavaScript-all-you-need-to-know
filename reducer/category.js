const category = [
    {itemName: 'OPPO', category: 'mobile'},
    {itemName: 'nevy force', category: 'watch'},
    {itemName: 'apple', category: 'mobile'},
    {itemName: 'hp', category: 'leptop'},
    {itemName: 'acer', category: 'leptop'},
]

// return unique category
const resutl = category.reduce((acc, cur) => {

    if(!acc.includes(cur.category)){
        acc.push(cur.category)
    }

    return acc
}, []) 

console.log(resutl)