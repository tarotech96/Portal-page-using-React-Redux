
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myReducers from './reducers/myReducers';
import Login from './components/Login/Login';
import AddUser from './components/Users/AddUser';

import { I18nextProvider } from 'react-i18next';

import i18n from './assets/i18n/i18n.js';
const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props}/>} />
          <Route path="/insert" component={AddUser} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);
