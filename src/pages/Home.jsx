import { useCharacter } from "../hooks/useCharacter"
import ListOfCards from "../components/ListOfCharacters"
import { useCardSelected } from "../hooks/useCardSelected"
import LoadingComponent from "../components/LoadingComponent"

export default function Home(){
    // const {selectedId} = useCardSelected()
    let {characters, isLoading} = useCharacter()
    console.log(characters);
    if(isLoading){
      return <LoadingComponent/> 
    }

    return (
     <>

     <h2>Memorama de rick and morty</h2>
     <div className="grid-targets">
       <ListOfCards characters={characters} />  
     </div>
     </>   
    )
}