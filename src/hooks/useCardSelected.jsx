import { useCharacter } from './useCharacter'
import { useLocalStorage } from './useLocalStorage'

export function useCardSelected(){

    const {updateCharacter} = useCharacter()
    const {add, deleteItem, get} = useLocalStorage()

    const pushCard = (card_id) => {
        let valueStore = get()
        if(valueStore){
            console.log(valueStore)    
            compare(card_id, valueStore)
            return
        }
        add(card_id)
    }

    const compare = (value1, value2) => {
        if(value1 == value2){
            alert("son iguales")
            updateCharacter(value1)
        }else{
            alert("no son iguales")
        }
        deleteItem()
    }

    return {
        pushCard,
    }

}