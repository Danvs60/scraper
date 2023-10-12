import { useState } from "react";
import "./App.scss";
import Game from "./components/Game/Game";

const games = [
  {
    id: 0,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 1,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 2,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 3,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 4,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 5,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 6,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 7,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 8,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 9,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 10,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 11,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 12,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 13,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
  {
    id: 14,
    title: "Rocket League",
    img_src:
      "https://assets1.ignimgs.com/2019/08/26/rocket-league---button-fin-1566850630208.jpg?width=300&crop=1%3A1%2Csmart&auto=webp",
    imdb_rating: 8.0,
    age_rating: 12,
  },
];

const App = () => {
  const [showDetailsId, setShowDetailsId] = useState(null);

  return (
    <div className="app-container">
      <header>
        <nav className="container">
          <h1>Games Scraper</h1>

          <button>Release Date</button>
        </nav>
      </header>

      <main>
        <div className="games-container container">
          {games.map((game) => (
            <Game
              key={game.id}
              {...game}
              showDetails={showDetailsId === game.id}
              handleMouseOver={() => setShowDetailsId(game.id)}
              handleMouseLeave={() => setShowDetailsId(null)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
