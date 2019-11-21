;(function(){
    'use ctrict'

    const template = `
    <div id="app">
        <input type="text" id="enter">
        <button id="addItem">Добвить</button>
        <div id="todoList"></div>
        <button id="makeDone">Выполнить</button>
        <button id="makeNotDone">Востановить</button>
        <button id="remove">Удалить</button>
    </div>
    `

    let rootElement = null

    // Создаем div и отображаем дочерние элемнгты div

    function getRoot () {
        const divElement = document.createElement('div')
        divElement.innerHTML = template

         rootElement = divElement.firstElementChild

        const buttonElements = rootElement.querySelectorAll('button')
        console.log(buttonElements)
        for (let i = 0; i < buttonElements.length; i++) {
            const buttonElement = buttonElements[i]


            buttonElement.addEventListener('click', function(event){
                view.clickHandler(buttonElement.getAttribute('id'))
           
            })
        }

        return rootElement

    }

    function getValue () {
        return rootElement.querySelector('#enter').value
    }

    
    function setValue (value) {
        rootElement.querySelector('#enter').value = value
    }

//  Обновляем страницу

    function update (items) {
        const todoListElement = document.querySelector('#todoList')
    
        const ulElement = createTodoList(model.getItems())
    
        todoListElement.textContent = ''
    
        todoListElement.append(ulElement)
    }


//  Создаем все элементы списка на странице

    function createTodoList (items) {
        const ulElement = document.createElement('ul')
       
    
        for (const item of model.getItems()) {
            const liElement = document.createElement('li')
            const inputElement = document.createElement('input')
    
            inputElement.setAttribute('type','checkbox')
    
            if (item.done) {
                liElement.classList.add('done')
            }
    
            if (item.checked) {
                inputElement.setAttribute('checked', '')
            }
    
            liElement.append(inputElement)
            liElement.append('' + item.content)
    
            ulElement.append(liElement)
    
            inputElement.addEventListener('click', function(event){
                event.preventDefault()
                view.clickHandler('clickByItem', item.id)
            //    model.toggleChecked(item.id)
    
                // update()
            })
        }
    
        return ulElement
    }

    

    window.view = {
        getRoot: getRoot,
        update: update,
        getValue: getValue,
        setValue: setValue,
        clickHandler: () => {}
    }
})();


