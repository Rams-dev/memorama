import {useCallback, useContext} from 'react'
import CharacterContext  from '../context/CharacterContext'
import { GetCharacter } from '../services/GetCharacters'


export function useCharacter(){
    const {characters, setCharacters, isLoading, setIsLoading, selected, setSelected} = useContext(CharacterContext)

    const getCharacter = () => {
        setIsLoading(true)
        GetCharacter().then(res =>{
            
            // for(let i = 0; i < res.length; i++){
            //     if( i > 20 ){
            //         res[i].id = res[i].id + 20
            //     }
            // }
            setCharacters(res)
            setIsLoading(false)
        }) 
    }

    
    const updateCharacter = (characterDelete) => {
        setCharacters(characters.filter(singleCharacter => singleCharacter.id !== characterDelete))
    }

    return {
        characters,
        setCharacters,
        isLoading,
        setSelected,
        selected,
        getCharacter,
        updateCharacter
    }

}