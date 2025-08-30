const list = document.getElementById('list')
list.style.backgroundColor = 'gray'
list.style.fontSize = '25px'

// or

const style = {
    color: 'orange',
    fontSize: '36px',
    border: '1px solid blue'
}

Object.assign(list.style, style)    // {location, object}

// loop

const obj = {
    backgroundColor: 'black',
    color: 'white'
};      /** must have ; of before [...list.children] object */

[...list.children].forEach(li => Object.assign(li.style, obj))