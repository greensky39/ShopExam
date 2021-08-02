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

const homeicon = css`
  color: black;
`;

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

          <Route path="/:id">
            <div>아무거나적었을때 이거 보여주셈</div>
          </Route>
          {/* <Route path="/어쩌구" component={Modal}>
          <div>어쩌구페이지에요</div>
        </Route> */}
          <Route path="/">
            <MainPage shoes={shoes} setShoes={setShoes} />
          </Route>
        </Switch>
      </div>
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
              <a className="nav-link">Link</a>
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
