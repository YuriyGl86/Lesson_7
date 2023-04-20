const menuButtonList = Array.from(document.querySelectorAll('.dropdown__value'))
const menuList = Array.from(document.querySelectorAll('ul.dropdown__list'))

menuButtonList.forEach(menuButton => menuButton.addEventListener('click', menuBattonHandler))
menuList.forEach(menu => menu.addEventListener('click', menuHandler))

function menuBattonHandler(event){
    event.target.nextElementSibling.classList.toggle('dropdown__list_active')    
}


function menuHandler(event){
    let item = event.target
    this.classList.toggle('dropdown__list_active')
    event.preventDefault()
    console.log(item.closest('ul.dropdown__list'))
    item.closest('.dropdown').querySelector('.dropdown__value').innerText = item.innerText
}