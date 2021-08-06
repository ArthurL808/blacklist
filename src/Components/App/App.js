import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "../../protectedRoute";
import Header from "../Header";
import Home from "../Home";
import IndividualPerson from "../Persons/individualPerson";
import MyBlackList from "../MyBlacklist";
import Huntboard from "../Huntboard";
import AddPerson from "../Persons/AddPerson";
import LoginForm from "../LoginForm";
import NotFound from "../NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/deragatoryMarks/onPerson/:id"
          component={IndividualPerson}
        />
        <ProtectedRoute exact path="/myblacklist/:id" component={MyBlackList} />
        <ProtectedRoute exact path="/huntboard" component={Huntboard} />
        <ProtectedRoute exact path="/AddPerson" component={AddPerson} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
