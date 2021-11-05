import {useContext, useEffect} from 'react'
import CharacterContext  from '../context/CharacterContext'
import { GetCharacter } from '../services/GetCharacters'


export function useCharacter(){
    const {characters, setCharacters, isLoading, setIsLoading, selected, setSelected} = useContext(CharacterContext)

    useEffect(() => {
        setIsLoading(true)
        getCharacter()
        setIsLoading(false)

    },[])

    const getCharacter = () => {
        GetCharacter().then(res => setCharacters([...res,...res]))
    }

    const updateCharacter = (characterDelete) => {
        return characters.filter(singleCharacter => singleCharacter.id != characterDelete)

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