import { useCardSelected } from '../hooks/useCardSelected'

export default function SingleCardCharacter(props){
const {pushCard} = useCardSelected()

    const {character} = props
   
    return (
        <div className="card" onClick={() => pushCard(character.id)} >
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