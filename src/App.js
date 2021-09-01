import { Route } from "react-router-dom";
//HOC
import DefaultHOC from "./HOC/default.hoc";

//Component
import HomePage from "./pages/homePage";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
    </>
  );
}
// / , /movie
export default App;
