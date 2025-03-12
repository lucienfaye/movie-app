import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Importation nécessaire de React Router
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'Un film de science-fiction sur le vol de rêves.',
      posterURL: 'https://c7.alamy.com/comp/2C4X05R/inception-2010-directed-by-christopher-nolan-and-starring-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-and-ken-watanabe-a-team-break-in-to-the-subconscious-of-a-businessman-using-dream-sharing-technology-in-order-a-plant-a-seed-to-influence-his-decision-in-the-real-world-2C4X05R.jpg',
      rating: 9,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0', // URL de la bande-annonce
    },
    {
      title: 'Titanic',
      description: 'Un film romantique sur le célèbre naufrage.',
      posterURL: 'https://c7.alamy.com/comp/E1GHJM/titanic-1997-american-epic-romancedisaster-film-starring-leonardo-E1GHJM.jpg',
      rating: 8,
      trailerURL: 'https://www.youtube.com/embed/2e-eXJ6HgkQ', // URL de la bande-annonce
    },
    {
      title: 'The_Dark_Knight',
      description: 'Batman lutte contre le Joker.',
      posterURL: 'https://c7.alamy.com/comp/2AYYHFN/the-dark-knight-2008-directed-by-christopher-nolan-and-starring-christian-bale-heath-ledger-aaron-eckhart-and-michael-caine-the-joker-tests-gotham-and-batman-seeks-a-white-knight-to-fight-gothams-criminal-underworld-2AYYHFN.jpg',
      rating: 10,
      trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY', // URL de la bande-annonce
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
    <Router>
      <div className="App">
        <h1>Liste des Films</h1>
        
        <Routes>
          {/* Route pour la page d'accueil avec la liste de films */}
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  ratingFilter={ratingFilter}
                  onTitleChange={setTitleFilter}
                  onRatingChange={setRatingFilter}
                />
                <MovieList movies={filteredMovies} />
                <button onClick={() => addMovie({
                  title: 'New_Movie',
                  description: 'This is a new movie.',
                  posterURL: 'https://c7.alamy.com/comp/2A7JF01/spider-man-homecoming-2017-directed-by-jon-watts-and-starring-tom-holland-michael-keaton-and-robert-downey-jr-peter-parker-takes-on-the-vulture-and-his-alien-technology-2A7JF01.jpg',
                  rating: 7,
                  trailerURL: 'https://youtu.be/t06RUxPbp_c?si=19efettHY6Y5D8Ty', // Bande-annonce d'un nouveau film
                })}>
                  Ajouter un film
                </button>
              </>
            }
          />

          {/* Route pour la page de description d'un film spécifique */}
          <Route
            path="/movie/:movieTitle"
            element={<MovieDetail movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const MovieDetail = ({ movies }) => {
  const movieTitle = window.location.pathname.split('/movie/')[1]; // Récupérer le titre du film depuis l'URL
  const movie = movies.find((m) => m.title === movieTitle);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="Bande-annonce"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Retour à la liste des films</Link>
    </div>
  );
};

export default App;





