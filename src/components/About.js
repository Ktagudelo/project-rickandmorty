import '../styles/About.css';
import React from 'react'

function About() {
    return (
        <section className="container-about">
            <h1 className="about-title">About</h1>
            <p data-testid="content" className="about-text">
                The Rick and Morty API is a RESTful and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.
            </p>
        </section>
    )
}

export default About;