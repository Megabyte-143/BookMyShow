import { Route } from "react-router";

function Name() {
  return (<h1>Welcome to the Home Page</h1>)
}
function Name2() {
  return (<h1>Welcome to the Movie Page</h1>)
}
function App() {
  return (
    <>
      <Route path="/" exact component={Name}>
      </Route>
      <Route path="/movie" exact component={Name2}>
      </Route>
    </>
  )
}
export default App;