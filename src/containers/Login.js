import React, { useState, useCallback, useContext } from "react";
import {connect} from 'react-redux';
import {loginRequest} from '../actions';
import { Link, Redirect } from "react-router-dom";
import googleIcon from "../assets/static/google-icon.png";
import Header from '../components/Header';
import "../assets/styles/components/Login.scss";
import { AuthContext } from "../Auth.js";
import app from "../config.js";
const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
    password: ""
  });
  
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          return <Redirect to="/" />;
      } catch (error) {
        alert(error);
      }
    },
    []
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <Header isLogin/>
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
        <label for="email">Correo</label>
          <input name="email" className="input" type="text" placeholder="Correo" onChange={handleInput}/>
          <label for="password">Contraseña</label>
          <input name="password" className="input" type="password" placeholder="Contraseña" onChange={handleInput}/>
          <button className="button">Iniciar sesión</button>
        </form>
        {/* <section className="login__container--social-media">
          <div>
            <img src={googleIcon} /> Inicia sesión con Google
          </div>
        </section> */}
        {/* <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
        </p> */}
      </section>
    </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
}

export default connect(null, mapDispatchToProps)(Login)