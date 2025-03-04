import { useEffect, useState } from "react";

function Index() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:4000/indian")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter movies based on search input
  const filteredMovies = search
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : movies;

  if (loading) return <h2>Loading movies...</h2>;
  if (error) return <h2 style={{ color: "red" }}>Error: {error}</h2>;

  return (
    <div className="container">
      <h1 className="text-light">Indian Movies</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {filteredMovies.length === 0 ? (
          <p className="text-center">No movies found</p>
        ) : (
          filteredMovies.map((movie) => (
            <div className="movie-card" key={movie._id}>
              <img
                src={movie.posterUrl || "/assets/img/default-poster.jpg"}
                alt={movie.title}
              />
              <div className="movie-details">
                <h3>{movie.title || "N/A"}</h3>
                <p><strong>Year:</strong> {movie.year || "N/A"}</p>
                <p><strong>Genre:</strong> {movie.genre || "N/A"}</p>
                <p><strong>Director:</strong> {movie.director || "N/A"}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Styles */}
      <style>
        {`
          .movie-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
          }
          .movie-card {
            background: #222;
            padding: 10px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
          }
          .movie-card img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 5px;
          }
          .movie-details h3 {
            color: #fff;
            font-size: 18px;
            margin: 10px 0;
          }
          .movie-details p {
            color: #bbb;
            font-size: 14px;
            margin: 5px 0;
          }
          .search-container {
            margin: 20px 0;
            text-align: center;
          }
          .search-container input {
            width: 60%;
            padding: 8px;
            border-radius: 5px;
            border: 1px solid #555;
            background: #333;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Index;
