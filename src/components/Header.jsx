import React, { useContext } from "react";
import { connect } from "react-redux";
import gravatar from "../utils/gravatar";
import { Link, Redirect } from "react-router-dom";
import classNames from "classnames";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo_white.png";
import userIcon from "../assets/static/user-icon.png";
import { AuthContext } from "../Auth.js";
import app from "../config.js";
const Header = props => {
  const { user, isLogin, isRegister } = props;

  const handleLogout = () => {
    app.auth().signOut();
  };

  const handleAddUser = e => {
    <Redirect to="/register" />;
  };

  const handleAddRoute = e => {
    <Redirect to="/addRoute" />;
  };
  const headerClass = classNames("header", {
    isLogin,
    isRegister
  });

  const { currentUser } = useContext(AuthContext);

  return (
    <header className={headerClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Yego! Admin" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {currentUser ? (
            <img src={userIcon} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>
          {currentUser ? (
            <li>
              <a href="/">{user.name}</a>
            </li>
          ) : null}

          {currentUser ? (
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar sesión
              </a>
              <br />
              <a href="/register" onClick={handleAddUser}>
                Añadir usuario
              </a>
              <br />
              <a href="/addRoute" onClick={handleAddRoute}>
                Añadir ruta
              </a>
            </li>
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
          <li></li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
