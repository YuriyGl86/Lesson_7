const tabList = Array.from(document.querySelectorAll('.tab'))
const pageList = Array.from(document.querySelectorAll('.tab__content'))
console.log(tabList)

document.querySelector('.tab__navigation').addEventListener('click', tabHandler)

function tabHandler(event){
    let tab = event.target.closest('.tab')
    if(!tab) return
    console.log(tab)

    
}