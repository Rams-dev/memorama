import { useEffect } from "react"
import { useCharacter } from "../hooks/useCharacter"
import ListOfCards from "../components/ListOfCharacters"
// import { useCardSelected } from "../hooks/useCardSelected"
import LoadingComponent from "../components/LoadingComponent"

export default function Home(){
    // const {selectedId} = useCardSelected()
    let {getCharacter, characters, isLoading} = useCharacter()

    useEffect(() => { 
      getCharacter()
    },[])
    console.log("home render");

    console.log(characters)
    
    if(isLoading){
      return <LoadingComponent/> 
    }

    return (
     <>
     <h1 className="title">Memorama de rick and morty</h1>
     <div className="grid-targets">
       <ListOfCards characters={characters} />  
     </div>
     </>   
    )
}