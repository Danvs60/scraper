import "./Game.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Game = ({
  id,
  title,
  img_src,
  imdb_rating,
  age_rating,
  showDetails,
  handleMouseOver,
  handleMouseLeave,
}) => {
  return (
    <div
      className="game-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {!showDetails && (
        <div className="image-container">
          <img src={img_src} />
        </div>
      )}

      <div className="rank-container">
        <span className="rank">{id + 1}</span>
      </div>

      {showDetails && (
        <div className="show-details-container">
          <div className="details">
            <h2>{title}</h2>

            <div className="ratings-container">
              <p className="rating">
                <FontAwesomeIcon icon={faStar} />
                {imdb_rating}
              </p>

              <p>{age_rating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
