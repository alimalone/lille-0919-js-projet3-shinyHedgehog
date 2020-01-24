import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Identification from "./pages/Identification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import KmUpdate from "./components/KmUpdate";
import AddCar from "./pages/AddCar";
import SelectCar from "./pages/SelectCar";
const { siteTitle } = require("./conf.js");

export default function App() {
  document.title = siteTitle || "Shiny Hedgehog";
  return (
    <div className="App">
      <Switch>
        <Route path="/identification" component={Identification} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/addcar" component={AddCar} />
        <Route path="/selectcar" component={SelectCar} />
        <Route path="/kmupdate" component={KmUpdate}></Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
