import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav, Homepage, ReviewsList, ReviewPage } from "./Components";
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
            <Route exact path="/reviews/:category?">
              <ReviewsList />
            </Route>
            <Route path="/reviews/review/:review_id">
              <ReviewPage>
                <p>Review not found!</p>
              </ReviewPage>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
