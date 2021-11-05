import {useState} from 'react'
import { useCardSelected } from '../hooks/useCardSelected'

export default function SingleCardCharacter(props){
const {pushCard, selected, selectedId} = useCardSelected()

    const {character} = props
    console.log(selected)
    console.log(selectedId)
    
    return (
        <div className="card" onClick={() => pushCard(character.id)}>
            <picture>
                <img src={character.image} alt={character.name} className="card__img" />
                <p className="card__name">
                    {character.name}
                </p>
                <div className="card__number">
                    <span className="card__id">{character.id}</span>
                </div>
            </picture>
        </div>
    )
}