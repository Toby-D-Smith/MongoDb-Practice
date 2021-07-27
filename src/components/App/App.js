import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { MongoClient } from "mongodb";

import "./App.css";
import Nav from "../Nav";
import Home from "../Home";
import Form from "../Form";

function App() {
  // const url = `mongodb+srv://TobySmith1:ZRAGjm1FvFVhGX7R@gettingstarted.ursfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  // const client = new MongoClient(url);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
