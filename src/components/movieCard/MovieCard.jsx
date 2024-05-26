import React from 'react';
import './MovieCard.css';
const MovieCard = ({ image, movieName, episode, handleOpenDetail }) => {
  return (
    <>
      <div className='movieCard'>
        <div className="cardImage" onClick={() => handleOpenDetail()} >
          <img src={image} alt={movieName} />
        </div>
        <span className='cardEpisode'>{episode}</span>
        <span className='movieName'>{movieName}</span>
      </div>
    </>
  )
}

export default MovieCard;