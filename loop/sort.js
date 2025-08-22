const arr = [2, 4, 1, 6, 8, 76, 5, 33, 45, 5, 7, 0, -4, 22, -5]

// small -> big
const assending = arr.sort((a, b) => {
    if(a > b){
        return 1
    }else if(a < b){
        return -1
    }else{
        return 0
    }
})

// console.log(assending)

// big -> small
const dissending = arr.sort((a, b) => {
    if(a > b){
        return -1
    }else if(a < b){
        return 1
    }else{
        return 0
    }
})

// console.log(dissending)

//************************************************************************** */

const info = [
    {
        name: 'riad',
        age: 20
    },
    {
        name: 'shamim',
        age: 25
    },
    {
        name: 'tamim',
        age: 14
    },
    {
        name: 'raki',
        age: 23
    },
]

info.sort((a, b) => {
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log(info)