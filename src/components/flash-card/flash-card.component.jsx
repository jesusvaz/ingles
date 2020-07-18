import React from 'react';
import './flash-card.styles.scss';


const FlashCard = ({translation}) => {
    return (
        <div className='flashcard'>
            <h1>{translation}</h1>
        </div>
    )
}

export default FlashCard
