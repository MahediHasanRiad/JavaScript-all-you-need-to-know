// create
const p = document.createElement('p')
p.className = 'text'
p.setAttribute('title', 'new p tag create')
p.innerText = 'this is my new <p> tag'

const list = document.getElementById('list')
list.appendChild(p)


// create function
function createItem(tagName, className, text, tag){
    const item = document.createElement(tagName)
    item.className = className
    item.innerText = text

    const list = document.getElementById(tag)
    list.appendChild(item)
}

createItem('h1', 'text', 'This is my Heading', 'list')
createItem('h2', 'text', 'This is my Heading 2', 'list')


// where create / add new element {location, element}
list.insertAdjacentElement('afterbegin', p)
list.insertAdjacentElement('afterend', p)
list.insertAdjacentElement('beforebegin', p)
list.insertAdjacentElement('beforeend', p)