/**
 * list array like data structure, but not array
 * if you want to use array all method, you have to convert in array 1st
 */

const listItem = document.getElementsByTagName('li')

// convert in array
// const listItems = Array.from(listItem)
// or 
const listItems = [...listItem]

listItems.forEach((li, index) => {
    let text = li.innerHTML
    li.innerHTML = `${index + 1} ${text}`
});
