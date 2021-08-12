import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let store = createStore(() => {
  return [
    { id: 0, name: "멋진 신발", quan: 2, type: "운동화" },
    { id: 1, name: "구린 신발", quan: 3, type: "슬리퍼" },
    { id: 2, name: "예쁜 신발", quan: 5, type: "구두" },
    { id: 3, name: "미친 신발", quan: 10, type: "장화" },
    { id: 4, name: "그냥 신발", quan: 7, type: "샌들" },
    { id: 5, name: "보통 신발", quan: 9, type: "운동화" },
  ];
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
