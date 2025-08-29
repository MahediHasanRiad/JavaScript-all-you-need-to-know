const list = document.getElementById('list')

const getParent = list.parentElement
console.log('getParent', getParent)

const getChild = list.children
console.log('getChild', getChild)

const preItem = list.previousElementSibling
console.log('preItem', preItem)

const nextItem = list.nextElementSibling
console.log('nextItem', nextItem)

const getFirstChild = list.firstElementChild
console.log(getFirstChild)

const getLastChild = list.lastElementChild
console.log(getLastChild)