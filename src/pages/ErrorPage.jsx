import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return home</Link>
    </main>
  )
}

export default ErrorPage
