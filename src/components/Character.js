import '../styles/Character.css';
import React, { useState, useEffect } from 'react';

export default function Character({ match }) {
    const [character, setcharacter] = useState([]);
    const characterId = match.params.id;

    useEffect(() => {

        const urlAPI = `https://rickandmortyapi.com/api/character/${characterId}`;

        fetch(urlAPI)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setcharacter(data)

            })
    }, [characterId])

    return (
        <section className="container-character">
            <img className="character-item__img" src={character.image} alt={`${character.name}`} />

            <section data-testid="content" className="character-details">
                <p>Id: {character.id}</p>
                <p>Name: {character.name}</p>
                <p>Description: {character.status} - {character.species}</p>
                <p>Gender: {character.gender}</p>
            </section>
        </section>
    )
}
