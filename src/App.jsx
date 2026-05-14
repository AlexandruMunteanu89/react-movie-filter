import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const moviesData =  [
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
 ]

 const initialFormData = {
    title: "",
    genre: ""
 }

  
  const [selectedGenre, setSelectedGenre] = useState('Tutti');
  const [search, setSearch] = useState('');
  

  //Form data
  const [formData, setFormData] = useState(initialFormData)

  
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setSearch(event.target.value);
  };

  // Logica di filtraggio
  const [movies, setMovies] = useState(moviesData);
  const [filteredData, setFilteredData] = useState(movies)
  useEffect(() => {
    const filteredMovies = selectedGenre === 'Tutti'
      ? movies
      : movies.filter(singleMovie => singleMovie.genre === selectedGenre || singleMovie.title === search);
      setFilteredData(filteredMovies);
  }, [selectedGenre, search, movies]);

    function handleAddMovie(e){
      e.preventDefault()

      console.log("Form Submitted");

      //reod the form data values
      console.log(formData);

      const newMovie = {
        id: Date.now(),
        ...formData
      }
      setMovies([...movies, newMovie]);
    }

    
    
    
    

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
        {filteredData.map((movie, i) => (
          <li key={i}>Title: {movie.title} - Genre: {movie.genre}</li>
        ))}
      </ul>
      <hr />
      <div>
        <form onSubmit={handleAddMovie}>
          <div>
            <label htmlFor="title">Title</label><br />
            <input name="title" className="form-control" id="title" type="text" placeholder="Type the movie title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label htmlFor="genre">Genre</label><br />
            <input name="genre" className="form-control" id="genre" type="text" placeholder="Type the movie's genre" value={formData.genre} onChange={(e) => setFormData({...formData, genre: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-primary my-2">Add Movie</button>
        </form>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
