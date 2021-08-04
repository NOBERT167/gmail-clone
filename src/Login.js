import React from "react";
import "./Login.styles.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./Firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png"
          alt="gmail logo"
          srcset=""
        />
        <Button color="primary" variant="contained" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
