import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./configs/firebase";
import { Provider } from "unstated";

ReactDOM.render(
  <>
    <Provider>
      <FirebaseAppProvider firebaseConfig={firebaseConfig()} suspense={true}>
        <App />
      </FirebaseAppProvider>
    </Provider>
  </>,
  document.getElementById("root")
);

reportWebVitals();
