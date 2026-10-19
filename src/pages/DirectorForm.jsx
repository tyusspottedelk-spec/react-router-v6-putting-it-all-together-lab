import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

function DirectorForm() {
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { directors, setDirectors } = useOutletContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const newDirector = { name, bio, movies: [] }
    try {
      const response = await fetch("http://localhost:4000/directors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDirector)
      })
      if (!response.ok) { throw new Error("failed to add director") }
      const createdDirector = await response.json()
      setDirectors([...directors, createdDirector])
      navigate(`/directors/${createdDirector.id}`)
    } catch (submitError) {
      console.error(submitError)
      setError("Unable to add director.")
    }
  }

  return (
    <div>
      <h2>Add New Director</h2>
      {error && <p role="alert">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  )
}

export default DirectorForm
