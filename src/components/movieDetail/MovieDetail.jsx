import React from 'react';
import './MovieDetail.css';
import PopularMovie from '../../popularMovie.js';

const MovieDetail = ({ movieName, episode, image, video, description, type, status, studios, duration, genres }) => {
    return (
        <div className='moviePlayDetail container'>
            <div className='leftSide'>
                <div className="moviePlay">
                    <h3>{movieName} - {episode}</h3>
                    <div className="movieVideo">
                        <video controls muted>
                            <source src={video} type='video/mp4' />
                        </video>
                    </div>
                </div>

                <div className="movieDetail">
                    <div className="topInfo">
                        <img src={image} alt={movieName} />
                        <div className="movieInfo">
                            <div className="info">
                                <span>Type :</span>
                                <span>{type}</span>
                            </div>
                            <div className="info">
                                <span>Status :</span>
                                <span>{status}</span>
                            </div>
                            <div className="info">
                                <span>Studios :</span>
                                <span>{studios}</span>
                            </div>
                            <div className="info">
                                <span>Duration :</span>
                                <span>{duration}</span>
                            </div>
                            <div className="info">
                                <span>Genres :</span>
                                <span>{genres.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottomInfor">
                        <span>Sypnosis :</span>
                        <p className='description'>{description}</p>
                    </div>
                </div>

            </div>
            <div className="rightSide">
                <h3>Popular Anime</h3>
                <div className="popularAnimeList">
                    {PopularMovie.map(card => (
                        <img src={card.image} alt={card.id} className='popularImage' key={card.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieDetail