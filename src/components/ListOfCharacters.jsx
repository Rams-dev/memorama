import SingleCardCharacter from './SingleCardCharacter'

export default function ListOfCards(props){
    const {characters} = props
    return(
        <>
            {
                characters.map(singleCharacter => (
                    <SingleCardCharacter character={singleCharacter}/>
                ))
            }
        </>
    )

}