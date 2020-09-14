import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/Header";
import "../assets/styles/components/Register.scss";

const AddRoute = props => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  });
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    return <Redirect to="/" />;
  };
  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Añadir nueva ruta</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            {/* <label for="name">Nombre</label>
             <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <label for="email">Correo</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <label for="password">Contraseña</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            /> */}
            <button className="button">Añadir</button>
          </form>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(AddRoute);
