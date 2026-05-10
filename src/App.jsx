import { useState } from "react";


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

  
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  // Logica di filtraggio
  const filteredMovies = selectedGenre === 'Tutti' 
    ? moviesData 
    : moviesData.filter(movie => movie.genre === selectedGenre);

 
 

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

      
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie}>{movie.title} ({movie.genre})</li>
        ))}
      </ul>
    </div>


     
    </>
  )
}

export default App
