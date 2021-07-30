import React from "react";
import Button from "@material-ui/core/Button";
import style from "./Login.module.css";
import { auth, provider } from "../../Firebase/firebase";
import { addUser } from "../../Store/Action/User";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
      
      dispatch(addUser(result)))
      .catch((err) => err);
  };

  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
        alt="facebook-logo"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6lrHkgyoJ6Ydv4Ra9wE9Frf9n-fL60cplxwhocBJNTaLd9oYYrFfMMm0IPbvrnRCb_8&usqp=CAU"
        className={style.font}
        alt="facebook-logo-font"
      />
      <Button variant="contained" className={style.signIn} onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
