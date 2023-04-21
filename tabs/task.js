
class Tab{

    constructor(elem){
    this.elem = elem
    this.tabList = Array.from(elem.querySelectorAll('.tab'))
    this.pageList = Array.from(elem.querySelectorAll('.tab__content'))

    elem.querySelector('.tab__navigation').addEventListener('click', this.tabHandler.bind(this))
    }

    tabHandler(event){
        let tab = event.target.closest('.tab')
        if(!tab) return
       
        let tabindex = this.tabList.findIndex(item => item == tab)
        console.log(tabindex)
        this.chengeTab(tabindex)
        
    }

    chengeTab(index){
        let oldTab = this.elem.querySelector('.tab_active')
        let oldPage = this.elem.querySelector('.tab__content_active')

        oldTab.classList.toggle('tab_active')
        oldPage.classList.toggle('tab__content_active')

        this.tabList[index].classList.toggle('tab_active')
        this.pageList[index].classList.toggle('tab__content_active')
    }
}

new Tab(document.querySelector('.tabs'))