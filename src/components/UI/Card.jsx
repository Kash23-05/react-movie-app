import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ movieData }) => {
  const nevigate = useNavigate();
  const { Poster, imdbID } = movieData;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>

        <div className="ticket-container">
          <div className="ticket_content">
            <button
              className="ticket_buy-btn"
              onClick={() => navigate(`/movie/${imdbID}`)}>
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
