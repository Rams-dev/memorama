import { useCharacter } from './useCharacter'
// import { useLocalStorage } from './useLocalStorage'

export function useCardSelected(){

    const {updateCharacter, setSelected, selected} = useCharacter()
    // const { deleteItem} = useLocalStorage()

    const pushCard = (card_id) => {
        // console.log(selected)
        if(selected.length > 0){
            setSelected([...selected,card_id])
        }else{
            setSelected([card_id])
        }
        if(selected.length === 1){
            if(selected[0] === selected[1]){
                console.log('son iguales')
                updateCharacter(selected[0])
            }else{
                console.log('no son iguales');
            }
            setTimeout(() => {
                setSelected([])
            }, 1000);
        }
        // let valueStore = get()
        // if(valueStore){
        //     // console.log(valueStore)    
        //     compare(card_id, valueStore)
        //     return
        // }
        // add(card_id)
    }

    // const compare = (value1, value2) => {
    //     if(value1 === value2){
    //         // alert("son iguales")
    //         updateCharacter(value1)
    //     }else{
    //         // alert("no son iguales")
    //     }
    //     deleteItem()
    //     setSelected(null)
    // }

    return {
        pushCard,
        selected
    }

}