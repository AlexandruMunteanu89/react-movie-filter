import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div className="container">
    <div className="row">
      <div className="title-div"><h1>Lista Filmi</h1></div>
    <div className="col-6 card main-div">
      <select className="m-2" onChange={handleGenreChange} value={selectedGenre}>
        <option value="Tutti">Tutti i generi</option>
        <option value="Azione">Azione</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Romantico">Romantico</option>
        <option value="Thriller">Thriller</option>
      </select>
      <div>
        <input className="m-2" onChange={handleGenreChange} value={search} placeholder="search"></input>
      </div>
      <ul className="card">
        {filteredMovies.map((movie, i) => (
          <li key={i}>Title: {movie.title} - Genre: {movie.genre}</li>
        ))}
      </ul>
      <hr />
      <div>
        <form action="">
          <div class="mb-3">
            <label className="form-label">Title</label>
            <input type="text" className="form-control" />
          </div>
          <div class="mb-3">
            <label className="form-label">Genre</label>
            <input type="text" className="form-control" />
          </div>
          <button type="submit" class="btn btn-primary my-2">Add Movie</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
