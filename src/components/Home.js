import '../styles/Home.css';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Fav from './Fav';

function Home() {
    const INITIAL_PAGE = 1;
    const [character, setcharacter] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };


    useEffect(() => {

        const urlAPI = `https://rickandmortyapi.com/api/character/?page=${page}`;

        fetch(urlAPI)
            .then(response => response.json())
            .then(data => {
                setcharacter(data.results);
                console.log(data.info);

            })
    }, [page])


    const handleLoadNext = () => {
        setPage(page + 1)
    }

    const handleLoadBefore = () => {
        setPage(page - 1)
    }

    return (
        <>
            <h1>Welcome Rick and Morty Page</h1>

            <section className="container-cards-button">
                {page === 1 ? (

                    <button className="card_button" onClick={() => handleLoadNext()}>{'▶'}</button>
                ) : (
                    <section>
                        <button className="card_button" onClick={() => handleLoadBefore()}>{'◀'}</button>
                        <button className="card_button" onClick={() => handleLoadNext()}>{'▶'}</button>
                    </section>
                )}
            </section>

            <section className="container-cards">
                {
                    character.map((item) =>
                        <section key={item.id} className="cards-item">
                            <img className="cards-item__img" src={item.image} alt={`${item.name}`} />
                            <section className="cards-item__details">

                                <section data-testid="name" className="cards-item__details--img-left">
                                    <p className="cards-item__details--title">{item.name}</p>
                                    <Link
                                        className="item"
                                        to="/"
                                        onClick={handleClick}

                                    >
                                    </Link>
                                    <Fav id={item.id}></Fav>
                                </section>

                                <section className="cards-item__details--img-right">
                                    <Link
                                        className="item"
                                        style={{ textDecoration: "none", color: "#08AEC5" }}
                                        to={`/character/${item.id}`}>
                                        Details
                                    </Link>

                                </section>
                            </section>
                        </section>
                    )
                }
            </section>
        </>
    )
}

export default Home;