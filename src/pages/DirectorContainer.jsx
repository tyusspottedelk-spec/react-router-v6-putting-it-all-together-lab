import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch("http://localhost:4000/directors")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch directors") }
            return r.json()
        })
        .then(setDirectors)
        .catch((fetchError) => {
            console.error(fetchError)
            setError("Unable to load directors.")
        })
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                {error && <p role="alert">{error}</p>}
                <Outlet context={{ directors, setDirectors }} />
            </main>
        </>
    );
}

export default DirectorContainer;
