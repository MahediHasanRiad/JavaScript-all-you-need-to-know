const shoppingCard = [
    {price: 10, amount: 2},
    {price: 20, amount: 4},
    {price: 30, amount: 3},
]

const total = shoppingCard.reduce((acc, cur) => {

   let totalItem = acc.totalItem + cur.amount
   let totalPrice = acc.totalPrice + (cur.price * cur.amount)

   return {
    totalItem,
    totalPrice
   }

}, {totalItem: 0, totalPrice: 0})

console.log(total)
 