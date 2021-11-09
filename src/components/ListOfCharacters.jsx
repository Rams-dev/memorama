import SingleCardCharacter from './SingleCardCharacter'
import { memo } from 'react'


export default memo(function ListOfCards(props){
    const {characters} = props
    console.log('render list')
    return(
        <>
            {
                characters.map(singleCharacter => (
                    <SingleCardCharacter character={singleCharacter} key={singleCharacter.id + Math.random()}/>
                ))
            }
        </>
    )
})