import { Route } from "react-router-dom";
//HOC
import DefaultHOC from "./HOC/default.hoc";
import MovieHOC from "./HOC/movie_hoc";
//Component
import HomePage from "./pages/homePage";
import MoviePage from "./pages/moviePage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </>
  );
}
// / , /movie
export default App;
