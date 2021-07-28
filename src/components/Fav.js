import '../styles/Fav.css'
import React, { useState } from 'react';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md';

const Fav = ({ id }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const Icon = isFavorite === true ? MdFavorite : MdFavoriteBorder;

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (

        <button data-testid="Button" className="button-fav" onClick={handleClick}>
            <Icon />
        </button>

    );
};


export default Fav;