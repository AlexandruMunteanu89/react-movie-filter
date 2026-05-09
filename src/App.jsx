

function App() {
  const movies =  [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
 
 
 

  return (
    <>
      <section>
        <select class="form-select" aria-label="Default select example">
          <option selected>Select movie genre</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
        <hr />
      </section>
      <section>
        <h2>Movie list</h2>
        {movies.map(movie => (
        <ul>
          <li key={movie.index}>{movie.title} {movie.genre}</li>
        </ul>
        ))}
      </section>
    </>
  )
}

export default App
