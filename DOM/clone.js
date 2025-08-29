/**
 * list.lastElementChild.cloneNode() { clone only <tag>, not innerText }
 * list.lastElementChild.cloneNode(true) { clone <tag> + innerText => deep clone }
 */

const list = document.getElementById('list')
const clone = list.lastElementChild.cloneNode()
clone.innerText = 'clone'

list.appendChild(clone)