import React, { useState } from "react"
import { connect } from "react-redux"
import { registerRequest } from "../actions"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import "../assets/styles/components/Register.scss"
import app from "../config.js"
import cogoToast from "cogo-toast"
const Register = props => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: ""
  })
  const [userData, setUserData] = useState({})
  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async event => {
    event.preventDefault()
    props.registerRequest(form)
    try {
      const { user } = await app
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password)
      setUserData(user)
      console.log(userData)
    } catch (error) {
      cogoToast.error("Hubo un error", error.message)
    }
  }

  return (
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Registra un nuevo usuario</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <label for="name">Nombre</label>
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
            />
            <button className="button" type="submit">
              Registrar usuario
            </button>
          </form>
        </section>
      </section>
    </>
  )
}

const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register)
