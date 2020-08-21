import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import AddRoute from "../containers/AddRoute";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";
import firebase from "../config.js";
import { AuthProvider } from "../Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => (
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
);

export default App;
