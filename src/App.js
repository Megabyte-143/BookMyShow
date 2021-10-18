import { Route } from "react-router-dom";

//axios
import axios from "axios";
//HOC
import DefaultHOC from "./HOC/default.hoc";
import MovieHOC from "./HOC/movie_hoc";

//Component
import HomePage from "./pages/homePage";
import MoviePage from "./pages/moviePage";
import PlaysPage from "./pages/playsPage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
      <DefaultHOC path="/plays" exact component={PlaysPage} />
    </>
  );
}
// / , /movie
export default App;
