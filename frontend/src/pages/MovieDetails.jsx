import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:4200/api/movie/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setError("Failed to fetch movie details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="text-center text-light">Loading...</h2>;
  if (error) return <h2 className="text-center text-danger">{error}</h2>;
  if (!movie) return <h2 className="text-center text-light">Movie Not Found</h2>;

  return (
    <div className="container movie-detail-section">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <div className="row">
        <div className="col-md-4">
          <img
            src={movie.posterUrl || "/assets/img/default-poster.jpg"}
            alt={movie.title}
            className="movie-detail-poster"
          />
        </div>
        <div className="col-md-8">
          <h2 className="movie-title">{movie.title}</h2>
          <p><strong>Year:</strong> {movie.year || "N/A"}</p>
          <p><strong>Genre:</strong> {movie.genre || "N/A"}</p>
          <p><strong>Director:</strong> {movie.director || "N/A"}</p>
          <p><strong>Cast:</strong> {movie.cast?.join(", ") || "N/A"}</p>
          <p><strong>Description:</strong> {movie.description || "No description available."}</p>
        </div>
      </div>
    </div>
  );
}
