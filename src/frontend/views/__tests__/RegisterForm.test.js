import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import RegisterForm from "../RegisterForm";

import store from '../../store';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
  <RegisterForm />
  </Provider>
  , div);
});
