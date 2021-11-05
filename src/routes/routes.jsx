import {Route} from 'wouter'
import Home from '../pages/Home'
import {CharacterContextProvider} from '../context/CharacterContext'

export default function routes(){
    return (
        <CharacterContextProvider>
            <Route path={'/'} component={Home} />
        </CharacterContextProvider>
    )
}