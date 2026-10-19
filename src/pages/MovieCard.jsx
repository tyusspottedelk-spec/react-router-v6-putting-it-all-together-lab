
import { useOutletContext, useParams } from "react-router-dom"

function MovieCard() {
  const { movieId } = useParams()
  const { director } = useOutletContext()
  const movie = director.movies.find((item) => item.id === movieId)

  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
