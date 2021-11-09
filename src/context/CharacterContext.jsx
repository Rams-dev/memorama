import {useState,createContext} from 'react'


const Context = createContext({})

export function CharacterContextProvider({children}){
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [selected, setSelected] = useState([])
    return <Context.Provider value={{
            isLoading, setIsLoading, characters, setCharacters, setSelected, selected
        }}
        >
        {children}
    </Context.Provider>
}

export default Context;