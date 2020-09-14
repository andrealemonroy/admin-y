import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import AddRoute from "../containers/AddRoute";
import NotFound from "../containers/NotFound";
import Layout from "../layout/admin";
import firebase from "../config.js";
import { AuthProvider } from "../Auth";
import PrivateRoute from "./PrivateRoute";
import {ThemeProvider} from "styled-components";
import {useDarkMode} from '../components/useDarkMode';
import { lightTheme, darkTheme } from "../components/theme"
import { GlobalStyles } from "../GlobalStyles";
const App = () => {

  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
return (
  <ThemeProvider theme={themeMode}>
    <GlobalStyles />
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/addRoute" component={AddRoute} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
)

};

export default App;
