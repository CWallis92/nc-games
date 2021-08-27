import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav, Homepage, ReviewsList } from "./Components";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/reviews">
              <ReviewsList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
