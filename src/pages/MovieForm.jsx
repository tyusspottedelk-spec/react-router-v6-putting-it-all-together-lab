import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useOutletContext, useParams } from "react-router-dom"

function MovieForm() {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [genres, setGenres] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { directorId } = useParams()
  const { director, updateDirector } = useOutletContext()

  if (!director) { return <h2>Director not found.</h2>}

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((genre) => genre.trim()).filter(Boolean),
    }
    try {
      const response = await fetch(`http://localhost:4000/directors/${directorId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ movies: [...director.movies, newMovie] })
      })
      if (!response.ok) { throw new Error("failed to add movie") }
      const updatedDirector = await response.json()
      updateDirector(updatedDirector)
      navigate(`/directors/${directorId}/movies/${newMovie.id}`)
    } catch (submitError) {
      console.error(submitError)
      setError("Unable to add movie.")
    }
  }

  return (
    <div>
      <h2>Add New Movie</h2>
      {error && <p role="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default MovieForm
