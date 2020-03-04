import React from "react";

import "./Sign-in-and-Sign-up.styles.scss";

import SignIn from "../../components/Sign-In/Sign-In.component";
import SignUp from "../../components/Sign-Up/Sign-Up.component";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInAndSignUp;
