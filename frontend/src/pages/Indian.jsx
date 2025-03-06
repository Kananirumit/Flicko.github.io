import React, { useEffect, useState } from "react";

export default function IndianMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/indian")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); 
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, []);
  

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <h1 className="text-light">Indian Movies</h1>
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie._id} className="col-md-3 mb-4">
              <div className="card bg-dark text-white">
                <img
                  src={movie.posterUrl || "/assets/img/default-poster.jpg"}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.year || "N/A"}</p>
                  <p className="card-text">{movie.genre || "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2 className="text-center text-light">No Movies Found</h2>
        )}
      </div>
    </div>
  );
}
