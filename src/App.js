import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import Homepage from "./pages/homepage/Homepage.component";
import Header from "./components/Header/Header.component";
import ShopPage from "./pages/shop/Shop.component";
import SignInAndSignUp from "./pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component";
import CheckOutPage from "./pages/checkout/checkout.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionForPreview } from "./redux/shop/shop.selectors";
class App extends Component {
  unsubscribeFromAuth = () => null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  UNSAFE_componentWillMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
