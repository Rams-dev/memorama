import { useCharacter } from "../hooks/useCharacter"
import ListOfCards from "../components/ListOfCharacters"
import { useCardSelected } from "../hooks/useCardSelected"

export default function Home(){
    const {selectedId} = useCardSelected()
    let {characters, isLoading} = useCharacter(selectedId)
    console.log(selectedId)
    characters = [...characters,...characters]
    return (
     <>

     <h2>Memorama de rick and morty</h2>
     <div className="grid-targets">
       <ListOfCards characters={characters} />  
     </div>
     </>   
    )
}