import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import Header from "./components/Header/Header.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = () => null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  UNSAFE_componentWillMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
