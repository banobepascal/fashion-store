import React, { Component } from "react";

import "./Sign-in.styles.scss";

import FormInput from "../Form-Input/Form-Input.component";
import CustomButton from "../Custom-Button/Custom-Button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="Email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              SIGN IN WITH GOOGLE{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
