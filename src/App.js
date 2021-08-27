import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/default.hoc";

//Component
import Temp from "./components/temp";

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={Temp} />
    </>
  );
}
// / , /movie
export default App;
