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
  console.log("shoes :", shoes[0].title);

  // title={shoes[1].title}
  // content={shoes[1].content}
  // price={shoes[1].price}
  let [ssort, setSsort] = useState(false);
  let [ssort2, setSsort2] = useState(false);

  let shoesCopy = [...shoes];

  let shoesCopy2 = [...shoes];

  function shoesSort() {
    setSsort(!ssort);
    console.log(shoesCopy);
  }

  function shoesSort2() {
    setSsort2(!ssort2);
    console.log(shoesCopy);
  }

  shoesCopy.sort(function (a, b) {
    return a.price - b.price;
  });
  shoesCopy2.sort(function (a, b) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
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
            />
          </Route>

          <Route path="/:id">
            <div>아무거나적었을때 이거 보여주셈</div>
          </Route>
          {/* <Route path="/어쩌구" component={Modal}>
          <div>어쩌구페이지에요</div>
        </Route> */}
          <Route path="/">
            <MainPage shoes={shoes} ssort={ssort} shoesCopy={shoesCopy} />
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
