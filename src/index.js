import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let 초기값 = [
  // { id: 0, title: "멋진 신발", quan: 2, type: "운동화", price: 125000 },
  // { id: 1, name: "구린 신발", quan: 3, type: "슬리퍼", price: 50000 },
  // { id: 2, name: "예쁜 신발", quan: 5, type: "구두", price: 178000 },
  // { id: 3, name: "미친 신발", quan: 10, type: "장화" },
  // { id: 4, name: "그냥 신발", quan: 7, type: "샌들" },
  // { id: 5, name: "보통 신발", quan: 9, type: "운동화" },
];

// function reducer(state = 초기값, 액션) {
//   if (액션.type === "항목추가") {
//     let found = state.findIndex((a) => {
//       return a.id === 액션.payload.id;
//     });
//     if (found >= 0) {
//       let 초기값copy = [...state];
//       초기값copy[found].quan++;
//       return 초기값copy;
//     } else {
//       let 초기값copy = [...state];
//       초기값copy.push(액션.payload);
//       return 초기값copy;
//     }
//   } else if (액션.type === "수량증가") {
//     let 초기값copy = [...state];
//     초기값copy[액션.데이터].quan++;
//     return 초기값copy;
//   } else if (액션.type === "수량감소") {
//     let 초기값copy = [...state];
//     if (초기값copy[액션.데이터].quan <= 0) {
//       초기값copy[액션.데이터].quan = 0;
//     } else {
//       초기값copy[액션.데이터].quan--;
//     }
//     return 초기값copy;
//   } else {
//     return state;
//   }
// }

function reducer(state = 초기값, 액션) {
  if (액션.type === "항목추가") {
    let itemfind = state.findIndex((a) => {
      return (a.id = 액션.payload.id);
    });
    if (itemfind >= 0) {
      let 초기값copy = [...state];
      초기값copy[itemfind].quan++;
      return 초기값copy;
    } else {
      let 초기값copy = [...state];
      초기값copy.push(액션.payload);
      return 초기값copy;
    }
  } else if (액션.type === "수량증가") {
    let 초기값copy = [...state];
    let found = state.findIndex((a) => {
      return a.id === 액션.데이터;
    });
    초기값copy[found].quan++;
    return 초기값copy;
  } else if (액션.type === "수량감소") {
    let 초기값copy = [...state];
    let found = state.findIndex((a) => {
      return a.id === 액션.데이터;
    });
    if (초기값copy[found].quan <= 0) {
      초기값copy[found].quan = 0;
    } else {
      초기값copy[found].quan--;
    }
    return 초기값copy;
  } else {
    return state;
  }
}

let alert초기값 = true;
function reducer2(state = alert초기값, 액션) {
  if (액션.type === "false") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

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
