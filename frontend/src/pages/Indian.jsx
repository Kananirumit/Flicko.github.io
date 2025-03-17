import React, { useEffect, useState } from "react";

export default function IndianMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:4200/api/indian?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.movies]); // Append new data
        setHasMore(data.currentPage < data.totalPages); // Check if more pages exist
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, [page]);

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

      {hasMore && (
        <button className="btn btn-primary mt-4" onClick={() => setPage(page + 1)}>
          Load More
        </button>
      )}
    </div>
  );
}
