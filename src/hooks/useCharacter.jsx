import {useContext, useEffect} from 'react'
import CharacterContext  from '../context/CharacterContext'
import { GetCharacter } from '../services/GetCharacters'


export function useCharacter(){
    const {characters, setCharacters, isLoading, setIsLoading, selected, setSelected} = useContext(CharacterContext)

    useEffect(() => {
        getCharacter()
    },[characters])

    const getCharacter = () => {
        setIsLoading(true)
        GetCharacter().then(res => setCharacters(res))
        setIsLoading(false)
    }

    const updateCharacter = (characterDelete) => {
        characters.filter(singleCharacter => singleCharacter != characterDelete)

    }

    return {
        characters,
        setCharacters,
        isLoading,
        getCharacter,
        setSelected,
        selected,
        updateCharacter
    }

}