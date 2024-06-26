// import React from 'react';
// import '../styles/Movies.css';
// import MovieCard from '../components/MovieCard.jsx';
// import moviesData from '../utils/MoviesList.js';

// const Movies = () => {
//   return (
//     <div>
//     <h2 className="TopPicks">Movies in Theatres</h2>
//     <div className="movies">
//       {moviesData.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//     </div>
    
//   );
// };

// export default Movies;


// // const moviesData = [
// //   { id: 1, name: 'Shaitaan', category: 'U/A', language: 'Hindi,English', poster: 'https://assetscdn1.paytm.com/images/cinema/Shaitaan-705x750-8476f990-d9e2-11ee-8171-7df0cded886f.jpg?format=webp&imwidth=300' , about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.'},
// //   { id: 2, name: 'Article 370', category: 'U/A', language: 'French', poster: 'https://assetscdn1.paytm.com/images/cinema/Article-370--705x750-0d1f18a0-b845-11ee-8af7-ef221f22e642.jpg?format=webp&imwidth=300',about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.' },
// //   { id: 3, name: 'Shivrayancha Chaava', category: 'U', language: 'Spanish', poster: 'https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-705x750-150d4530-6f1d-11ee-8d97-473f463cc499.jpg?format=webp&imwidth=300',about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.' },
// //   { id: 4, name: 'Yodha', category: 'U/A', language: 'French', poster: 'https://assetscdn1.paytm.com/images/cinema/yodha_new-poster7e7021a0-7d69-11ee-a440-abbb08f7eeb1.jpg?format=webp&imwidth=310.3333333333333' ,about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.'},
// //   { id: 5, name: 'Dune: Part 2', category: 'U/A', language: 'Spanish', poster: 'https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-705x750-150d4530-6f1d-11ee-8d97-473f463cc499.jpg?format=webp&imwidth=300' ,about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.'},
// //   { id: 6, name: 'XYZ', category: 'U/A', language: 'French', poster: 'https://assetscdn1.paytm.com/images/cinema/Article-370--705x750-0d1f18a0-b845-11ee-8af7-ef221f22e642.jpg?format=webp&imwidth=300' ,about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.'},
// //   { id: 7, name: 'ABC', category: 'U/A', language: 'Spanish', poster: 'https://assetscdn1.paytm.com/images/cinema/Shivrayancha-Chhava-705x750-150d4530-6f1d-11ee-8d97-473f463cc499.jpg?format=webp&imwidth=300' ,about : 'Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.'},
// // ];

// // export default moviesData;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Movies.css';
import MovieCard from '../components/MovieCard.jsx';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movie/getMovie');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);
  console.log(Movies);
  return (
    <div>
      <h2 className="TopPicks">Movies in Theatres</h2>
      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
