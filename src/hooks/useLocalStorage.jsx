export function useLocalStorage(){
    const get = () =>{
        return localStorage.getItem('firstSelected')
    }

    const add = (card_id) =>{
        localStorage.setItem('firstSelected',card_id)
    }

    const deleteItem = () => {
        localStorage.removeItem('firstSelected')
    }


    return {
        add,
        get,
        deleteItem
    }

    
}