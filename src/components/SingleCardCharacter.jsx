import { useCardSelected } from '../hooks/useCardSelected'


export default function SingleCardCharacter(props){
    const {pushCard, selected} = useCardSelected()
    const {character} = props
    
    console.log("single card render")
    return (
        <div 
        className="card"
            className={selected.indexOf(character.id) !== -1  ? 'card' : 'card card__hidden'}
            onClick={() =>  selected !== character.id ?  pushCard(character.id) : {}}
            >
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