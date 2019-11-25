;(function(){
    'use ctrict'

    const template = `
    <div id="app">
        <input type="text" id="enter">
        <button id="addItem">Add</button>
        <div id="todoList"></div>
        <button id="makeDone">Done</button>
        <button id="makeNotDone">Restore</button>
        <button id="remove">Delete</button>
    </div>
    `

    let rootElement = null

    // Create a div and display child div elements

    function getRoot () {
        const divElement = document.createElement('div')
        divElement.innerHTML = template

         rootElement = divElement.firstElementChild

        const buttonElements = rootElement.querySelectorAll('button')
 
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

// Refresh the page

    function update (items) {
        const todoListElement = document.querySelector('#todoList')
    
        const ulElement = createTodoList(model.getItems())
    
        todoListElement.textContent = ''
    
        todoListElement.append(ulElement)
    }


// Create all the list items on the page

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


