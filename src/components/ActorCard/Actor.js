import { Link } from 'react-router-dom'

import './actor.scss'

const ActorCard = ({id, name, charName, imgLink}) => {
    return (
        <Link to={`/person/${id}`} className="artist-card">
            <img src={imgLink} alt=""/>
            <h4>{name}</h4>
            <h5>{charName}</h5>
        </Link>
    )
}

export default ActorCard;