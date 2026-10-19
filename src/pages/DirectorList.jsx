
import { Link, useOutletContext } from "react-router-dom"

const DirectorList = () => {
    const { directors } = useOutletContext()

    const displayDirectors = directors.map(d => (
        <li key={d.id}><Link to={d.id}>{d.name}</Link></li>
    ))

    return (
        <>
            <ul>{displayDirectors}</ul>
            <Link to="new">Add New Director</Link>
        </>
    );
}

export default DirectorList;
