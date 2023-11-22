import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "redux/config/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <GoogleOAuthProvider clientId="804113997694-48c8cn8m8ijuctrupf64m6i9u3oc966l.apps.googleusercontent.com">
  <Provider store={store}>
    <App />
  </Provider>
  </GoogleOAuthProvider>
  // </React.StrictMode>
);
