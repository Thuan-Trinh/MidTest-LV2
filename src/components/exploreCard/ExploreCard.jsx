import React from 'react';
import './ExploreCard.css';

const ExploreCard = ({ image, exploreMovieName, exploreMovieDiscription , handleOpenDetail}) => {
    return (
        <div className='exploreCardContainer container'>
            <div className="title">
                <h3>Explore</h3>
                <h5>What are you gonna watch today ?</h5>
            </div>
            <div className="exploreCard"  onClick={() => handleOpenDetail()} >
                <div className="exploreMovieImage">
                    <img src={image} alt={exploreMovieName} />
                </div>
                <div className='movieTitle'>
                    <span  className="exploreMovieName">{exploreMovieName}</span>
                    <span className='exploreMovieDiscription'>{exploreMovieDiscription}</span>
                </div>
            </div>
        </div>
    )
}

export default ExploreCard;