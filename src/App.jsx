import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/FIlter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'Un film de science-fiction sur le vol de rêves.',
      posterURL: 'https://c7.alamy.com/comp/2C4X05R/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X05R.jpg',
      rating: 9,
    },
    {
      title: 'Titanic',
      description: 'Un film romantique sur le célèbre naufrage.',
      posterURL: 'https://c7.alamy.com/comp/E1GHJM/titanic-1997-american-epic-romancedisaster-film-starring-leonardo-E1GHJM.jpg',
      rating: 8,
    },
    {
      title: 'The Dark Knight',
      description: 'Batman lutte contre le Joker.',
      posterURL: 'https://c7.alamy.com/comp/2AYYHFN/the-dark-knight-2008-directed-by-christopher-nolan-and-starring-christian-bale-heath-ledger-aaron-eckhart-and-michael-caine-the-joker-tests-gotham-and-batman-seeks-a-white-knight-to-fight-gothams-criminal-underworld-2AYYHFN.jpg',
      rating: 10,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Filtrer les films selon le titre et la note
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter ? movie.rating >= ratingFilter : true;
    return matchesTitle && matchesRating;
  });

  // Ajouter un nouveau film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Liste des Films</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'This is a new movie.',
        posterURL: 'https://c7.alamy.com/comp/2A7JF01/spider-man-homecoming-2017-directed-by-jon-watts-and-starring-tom-holland-michael-keaton-and-robert-downey-jr-peter-parker-takes-on-the-vulture-and-his-alien-technology-2A7JF01.jpg',
        rating: 7
      })}>
        Ajouter un film
      </button>
    </div>
  );
};

export default App;