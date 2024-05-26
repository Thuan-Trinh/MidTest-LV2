import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header/Header.jsx';
import MovieCard from './components/movieCard/MovieCard.jsx';
import ExploreCard from './components/exploreCard/ExploreCard.jsx';
import MovieDetail from './components/movieDetail/MovieDetail.jsx';
import DataCards from './datCard.js';
import './App.css';


const App = () => {
  const [cards, setCards] = useState(DataCards);
  const [showMovieCard, setShowMovieCard] = useState(true);
  const [showExploreCard, setShowExploreCard] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchField, setSearchField] = useState('');

  const [selectedCard, setSelectedCard] = useState(null);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [showList, setShowList] = useState(false);

  const intervalRef = useRef();

  //function set change explore card in home screen
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, [cards.length]);

  //defined array filter with search
  const filteredCards = cards.slice(1).filter((card) =>
    card.movieName.trim().toLowerCase().includes(searchField.trim().toLowerCase())
  );
  const filteredListCards = cards.filter((card) =>
    card.movieName.trim().toLowerCase().includes(searchField.trim().toLowerCase())
  );

  // function search
  const handleSearch = (e) => {
    setSearchField(e.target.value);
  }

  //function select card and show detail
  const handleClickCard = (cardInfo) => {
    setShowExploreCard(false);
    setShowMovieCard(false);
    setShowMovieDetail(true);
    setShowList(false);
    setSelectedCard(cardInfo);
  }

  //function back to home
  const handleBackToHome = () => {
    setShowExploreCard(true);
    setShowMovieCard(true);
    setShowList(false);
    setShowMovieDetail(false);
  }

  //function handle show list anime
  const handleShowListCards = () => {
    setShowExploreCard(false);
    setShowMovieCard(false);
    setShowMovieDetail(false);
    setShowList(true);
  }
  //components
  return (
    <>
      {/* Header here */}
      <Header
        home='Home'
        list='List anime'
        handleBackToHome={handleBackToHome}
        handleShowListCards={handleShowListCards}
      >
        {/* Children */}
        <input
          className='searchField'
          type="search"
          placeholder='Search anime or movie'
          value={searchField}
          onChange={handleSearch}
        />
      </Header>

      {/* explore movie card */}
      {
        showExploreCard &&
        <ExploreCard
          key={cards[currentIndex].id}
          handleOpenDetail={() => handleClickCard(cards[currentIndex])}
          image={cards[currentIndex].image}
          exploreMovieName={cards[currentIndex].movieName}
          exploreMovieDiscription={cards[currentIndex].description}
        />
      }

      {/*movie card list */}
      {showMovieCard &&
        <>
          <h2 className='container'>New Release</h2>
          <div className='listCards container'>
            {filteredCards.length === 0 ? (
              <p className='no-data'>Không có phim rồi!</p>
            ) : (
              filteredCards.map(card => (
                <MovieCard
                  key={card.id}
                  handleOpenDetail={() => handleClickCard(card)}
                  image={card.image}
                  movieName={card.movieName}
                  episode={card.episode}
                />
              )))}
          </div>
        </>
      }
      {/* show list movie */}
      {showList && 
        <div className='listCards container'>
          {filteredListCards.length === 0 ? (
            <p className='no-data'>Không có phim rồi!</p>
          ) : (
            filteredListCards.map(card => (
              <MovieCard
                key={card.id}
                handleOpenDetail={() => handleClickCard(card)}
                image={card.image}
                movieName={card.movieName}
                episode={card.episode}
              />
            )))
          }
        </div>
      }

      {/* Movie detail */}
      {showMovieDetail && selectedCard &&
        <MovieDetail
          movieName={selectedCard.movieName}
          episode={selectedCard.episode}
          image={selectedCard.image}
          video={selectedCard.video}
          description={selectedCard.description}
          type={selectedCard.type}
          status={selectedCard.status}
          studios={selectedCard.studios}
          duration={selectedCard.duration}
          genres={selectedCard.genres}
        />
      }
    </>
  )
}

export default App