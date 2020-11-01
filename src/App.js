import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import CreateCategory from "./components/CreateCategory";
import Home from "./components/Home";
import TopNav from "./components/Navbar";

function App() {
  return (
    <Container className="App">
      <TopNav></TopNav>
      <Switch>
        <Route path="/categories">
          <CreateCategory></CreateCategory>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
