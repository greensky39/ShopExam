/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import { NavBar, Container, Nav, NavDropdown } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import data from "./data.js";
import { Link, Route, Switch } from "react-router-dom";
import MainPage from "./component/MainPage";
import DetailPage from "./component/DetailPage";
import Cart from "./component/Cart";
import SelectPage from "./component/SelectPage";
import { useContext } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoList from "./recoiltest/TodoList";

const homeicon = css`
  color: black;
`;

export let 재고context = React.createContext();
// export let 재고context = useContext();
function App() {
  let [shoes, setShoes] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  let [ssort, setSsort] = useState(false);
  let shoesCopy = [...shoes];

  function shoesSort() {
    setSsort(!ssort);
    console.log(shoesCopy);
  }

  shoesCopy.sort(function (a, b) {
    return a.price - b.price;
  });

  return (
    <>
      <RecoilRoot>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/detail/:id">
              <DetailPage
                // title={shoes[1].title}
                // content={shoes[1].content}
                // price={shoes[1].price}
                shoes={shoes}
                shoesCopy={shoesCopy}
                재고={재고}
                재고변경={재고변경}
              />
            </Route>
            <Route path="/cart">
              <Cart shoesCopy={shoesCopy} />
            </Route>
            <Route path="/select">
              <SelectPage />
            </Route>
            <Route path="/todolist">
              <TodoList />
            </Route>
            <Route path="/:id">
              <div>아무거나적었을때 이거 보여주셈</div>
            </Route>

            <Route path="/">
              <재고context.Provider value={재고}>
                <MainPage shoes={shoes} setShoes={setShoes} />
              </재고context.Provider>
            </Route>
          </Switch>
        </div>
      </RecoilRoot>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ShoeShop
          </Link>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/detail" className="nav-link">
                Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/select" className="nav-link">
                Select
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todolist" className="nav-link">
                TodoList
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default App;
