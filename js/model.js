;(function(){
    'use strict'

// Create a database

    let items = [
        {id: 1, content: 'Buy bread', done: true, checked: true},
        {id: 2, content: 'Buy milk', done: false, checked: false}
    ]
    
    let idCounter = 3
    
    // Returns a copy of the database

    function getItems () {
        const copyItems = []

        for(const item of items) {
            copyItems.push({
                id: item.id,
                content: item.content,
                done: item.done,
                checked: item.checked
            })
        }


        return copyItems
    }

    // Adds an item to the database
    
    function addItem (content) {
        const item = {
            id: idCounter,
            content: content,
            done: false,
            checked: false
        }
    
        idCounter++
    
        items.push(item)

        model.dispatch(getItems())
    
    }

    // Removes an item from the database
    
    function removeItem (removedId) {
        const newItems = []
    
        for (let item of items) {
            if (item.id !== removedId ) {
                newItems.push(item)
            }
        }
        items = newItems

        model.dispatch(getItems())
    }

    // Changes the attribute of the checked element in the database
    
    function toggleChecked ( itemId) {
        for (const item of items) {
            if (item.id === itemId) {
                item.checked = !item.checked
            }
        }

        model.dispatch(getItems())
    }
    
    // Changes the done status of an item in the database
    
    function setDoneStatus (itemId, status) {
    
        for (const item of items) {
            if (item.id === itemId) {
                item.done = status
            }
        }
        
        model.dispatch(getItems()) 
    }
 
    window.model = {
        getItems: getItems,
        addItem: addItem,
        removeItem: removeItem,
        toggleChecked: toggleChecked,
        setDoneStatus: setDoneStatus,
        dispatch: () => {}
    }


})();


