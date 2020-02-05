import React from "react";
import SignUpForm from "./SignUpForm";
// import FirebaseContext from "../Firebase/Context";

const SignUpPage = () => (
  <div>
    {/* <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer> */}
    <SignUpForm />
  </div>
);

export default SignUpPage;
