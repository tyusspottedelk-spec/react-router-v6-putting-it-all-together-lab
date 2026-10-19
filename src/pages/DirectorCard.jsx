
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

function DirectorCard() {
    const { directorId } = useParams()
    const { directors, setDirectors } = useOutletContext()
    const director = directors.find((item) => item.id === directorId)

    if (!director) {
        return directors.length === 0
            ? null
            : <h2>Director not found.</h2>
    }

    const updateDirector = (updatedDirector) => {
        setDirectors((currentDirectors) =>
            currentDirectors.map((item) =>
                item.id === updatedDirector.id ? updatedDirector : item
            )
        )
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="movies/new">Add New Movie</Link>
            <Outlet context={{ director, updateDirector }} />
        </div>
    )
}

export default DirectorCard
