import React from 'react'
import '../css/CharacterCard.css'

export default function CharacterCard(props) {
    const img = props.actor.profile_img;
    const name = props.actor.name;
    const gender = props.actor.gender;
    const character = props.actor.character;

    return (
        <div className="card">
            <div className="img-box">
                <img src={img} alt={name}/>
            </div>
            <div className="content">
                <h3>{character}</h3>
                <p>Gender: {gender}</p>
                <p>Name: {name}</p>
            </div>
        </div>
    )
}
