import { useState, useEffect } from "react";


function App() {
  const moviesData =  [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

  const [selectedGenre, setSelectedGenre] = useState('Tutti');
  const [search, setSearch] = useState('');

  
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setSearch(event.target.value);
  };

  // Logica di filtraggio
  const filteredMovies = selectedGenre === 'Tutti'
    ? moviesData 
    : moviesData.filter(singleMovie => singleMovie.genre === selectedGenre || singleMovie.title === search);

 

  return (
    <>
<div>
      <h1>Lista Filmi</h1>  
      <select onChange={handleGenreChange} value={selectedGenre}>
        <option value="Tutti">Tutti i generi</option>
        <option value="Azione">Azione</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Romantico">Romantico</option>
        <option value="Thriller">Thriller</option>
      </select>
      <div>
        <input onChange={handleGenreChange} value={search} ></input>
      </div>
      <ul>
        {filteredMovies.map((movie, i) => (
          <li key={i}>Title: {movie.title} - Genre: {movie.genre}</li>
        ))}
      </ul>
    </div>

     
    </>
  )
}

export default App
