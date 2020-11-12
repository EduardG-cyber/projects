import React from 'react'
import CharacterCard from './CharacterCard';
import '../css/CharacterContainer.css'

export default function CharacterContainer(props) {
    return (
        <div className="main-container">
            <div className="container">
                {props.actors.filter(actor => {
                    return actor.name.includes(props.value)
                            || actor.character.includes(props.value);
                })
                .map(actor => {
                    return (
                        <CharacterCard key={actor.id} actor={actor}/>
                    );
                })}
            </div>
        </div>
    )
}
