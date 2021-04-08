import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import PropertiesContainer from "./Components/Molecules/PropertiesContainer";

function App() {
  return (
    <Router>
      <Box>
        hello
        <Switch>
          <Route path="/">
            <PropertiesContainer />
          </Route>
          <Route path="/login">{/* <Login/> */}</Route>
          <Route path="/Booking/:id">{/* <Login/> */}</Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
