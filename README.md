# Movie Directory

A single-page directory for browsing film directors and their movies. Users can
view director biographies and movie details, add directors, and add movies to a
director's collection. React Router v6 handles nested routes, links, and
redirects after successful form submissions. Director data is served by
JSON Server.

## Screenshot

![Movie Directory showing the directors list](./docs/movie-directory.png)

## Requirements

- Node.js and npm

## Getting started

Install the dependencies:

```sh
npm install
```

Start the JSON Server API in one terminal:

```sh
npm run server
```

Start the Vite development server in a second terminal:

```sh
npm run dev
```

Open the local URL printed by Vite. The API is available at
`http://localhost:4000/directors`.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about` | About the application |
| `/directors` | Director list |
| `/directors/new` | Add a director |
| `/directors/:directorId` | Director details and movies |
| `/directors/:directorId/movies/new` | Add a movie to a director |
| `/directors/:directorId/movies/:movieId` | Movie details |
| Any unmatched URL | Not-found page |

The director list and detail pages share fetched director state through nested
outlet context. Movie routes are nested beneath the selected director. Forms
send changes to the JSON Server API and navigate to the new director or movie
when the request succeeds.

## Tests and production build

Run the test suite:

```sh
npm test -- --run
```

Create an optimized production build:

```sh
npm run build
```

## Tech stack

- React 18
- React Router 6
- Vite
- JSON Server
- Vitest and Testing Library
