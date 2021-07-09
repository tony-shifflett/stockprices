import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Nav from "./components/Nav";
import About from "./pages/About"
import MoreStockInfo from "./pages/MoreStockInfo"

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/"
        render={(routerProps)=><Home />}/>
        <Route
          path="/Dashboard"
          render={(routerProps) => <Dashboard {...routerProps} />}
        />
        <Route
          path="/Stock/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}
        />
        <Route
        path="/About"
        render={(routerProps)=><About {...routerProps}/>}
        />
        <Route
        path="/MoreStockInfo/:symbol"
        render={(routerProps)=><MoreStockInfo {...routerProps}/>}
        />
      </Switch>
    </div>
  );
}

export default App;
