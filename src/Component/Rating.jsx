import React from 'react';

export default function Rating({ rate }) {
    const elements = [];

    for (let i = 0; i < 5; i++) {
        const starColor = i < rate ? "/img/redstar.png" : "/img/whitestar.png";
        const altText = i < rate ? "red star" : "white star";

        elements.push(
            <img key={i} src={starColor} alt={altText} />
        );
    }

    return (
        <div className='ratingContainer'>
            {elements}
        </div>
    );
}
