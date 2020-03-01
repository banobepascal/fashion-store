import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import Header from "./components/Header/Header.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
