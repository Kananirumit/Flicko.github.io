import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EnglishMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    setLoading(true);
    fetch(`http://127.0.0.1:4200/api/english?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.movies]);
        setHasMore(data.currentPage < data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="container-fluid movie-section">
      <h1 className="text-center title">🎥 English Movies</h1>

      {error && <h2 className="text-center text-danger">{error}</h2>}

      <div className="row justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie._id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="movie-card" onClick={() => navigate(`/movie/${movie._id}`)}>
                <img
                  src={movie.posterUrl || "/assets/img/default-poster.jpg"}
                  alt={movie.title}
                  className="movie-poster"
                />
                <div className="movie-details">
                  <h5 className="movie-title">{movie.title}</h5>
                  <p className="movie-rating">{movie.rating || "N/A"}</p>
                  <p className="movie-genre">{movie.genre || "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        ) : loading ? (
          <h2 className="text-center text-light">Loading...</h2>
        ) : (
          <h2 className="text-center text-light">No Movies Found</h2>
        )}
      </div>

      {hasMore && (
        <div className="text-center mt-4">
          <button className="load-more-btn" onClick={() => setPage(page + 1)}>
            Load More 📽️
          </button>
        </div>
      )}

      {/* CSS Styling */}
      <style jsx>{`
        /* Background */
        .movie-section {
          background: linear-gradient(135deg, #0a0f1a, #1c2333);
          min-height: 100vh;
          padding: 120px 0 50px; /* Fixed Navbar Overlap */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Title */
        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #00e6e6;
          text-shadow: 2px 2px 15px rgba(0, 230, 230, 0.8);
          margin-bottom: 40px;
        }

        /* Movie Card */
        .movie-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 8px;
          text-align: center;
          backdrop-filter: blur(20px);
          box-shadow: 0px 10px 25px rgba(0, 230, 230, 0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s;
          width: 100%;
          max-width: 180px;
          border: 1px solid rgba(0, 230, 230, 0.2);
        }

        .movie-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 15px 35px rgba(0, 230, 230, 0.5);
        }

        /* Movie Poster */
        .movie-poster {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 10px;
        }

        /* Movie Details */
        .movie-details {
          margin-top: 5px;
        }

        .movie-title {
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
        }

        .movie-year {
          font-size: 0.9rem;
          color: #00e6e6;
        }

        .movie-genre {
          font-size: 0.8rem;
          color: #bbb;
        }

        /* Load More Button */
        .load-more-btn {
          background: rgba(0, 0, 0, 0.6);
          border: 2px solid #00e6e6;
          font-size: 1rem;
          font-weight: bold;
          color: #00e6e6;
          padding: 8px 20px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          text-transform: uppercase;
          box-shadow: 0px 0px 15px rgba(0, 230, 230, 0.3);
        }

        .load-more-btn:hover {
          transform: scale(1.1);
          box-shadow: 0px 5px 25px rgba(0, 230, 230, 0.8);
          background: rgba(0, 230, 230, 0.2);
        }
      `}</style>
    </div>
  );
}
