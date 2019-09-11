import React from 'react';
import './App.css';
import Movie from './Movie'

const movie_title = [
  'starwars',
  'matrix',
  'starcraft'
]

const movie_img = [
  'https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg',
  'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/01/Starcraft-II-DeepMind-hed-796x419.jpg'
]



function App() {
  return (
    <div className="App">
      <Movie title={movie_title[0]} imgurl = {movie_img[0]} />
      <Movie title={movie_title[1]} imgurl = {movie_img[1]} />
      <Movie title={movie_title[2]} imgurl = {movie_img[2]} />
    </div>
  );
}

export default App;
