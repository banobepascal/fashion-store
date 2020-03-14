import React from "react";

import SignIn from "../../components/Sign-In/Sign-In.component";
import SignUp from "../../components/Sign-Up/Sign-Up.component";
import { SignInAndSignUpContainer } from "./Sign-in-and-Sign-up.styles";

const SignInAndSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;
