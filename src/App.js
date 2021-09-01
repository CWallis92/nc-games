import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import { Nav, Homepage, ReviewsList, ReviewPage } from "./Components";
import "./styles/App.css";
import { UserContext } from "./contexts/user";

function App() {
  const [user, setUser] = useState({
    username: "jessjelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
    name: "Jess Jelly",
  });

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
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
              <ReviewPage />
            </Route>
          </Switch>
        </main>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
