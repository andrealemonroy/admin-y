/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import AddRoute from "./containers/AddRoute";
import NotFound from "./containers/NotFound";

const dashboardRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "User Profile",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "Table List",
    component: Register,
    layout: "/admin"
  },
  {
    path: "/addRoute",
    name: "Add route",
    component: AddRoute,
    layout: "/admin"
  },
  {
    path: "/404",
    name: "Maps",
    component: NotFound,
    layout: "/admin"
  }
//   {
//     path: "/notifications",
//     name: "Notifications",
//     icon: "pe-7s-bell",
//     component: Notifications,
//     layout: "/admin"
//   },
];

export default dashboardRoutes;
