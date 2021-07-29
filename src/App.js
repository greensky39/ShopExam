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
            />
          </Route>

          <Route path="/:id">
            <div>아무거나적었을때 이거 보여주셈</div>
          </Route>
          {/* <Route path="/어쩌구" component={Modal}>
          <div>어쩌구페이지에요</div>
        </Route> */}
          <Route path="/">
            <MainPage shoes={shoes} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <Link to="/">ShoeShop</Link>
          </a>

          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <Link to="/detail">Detail</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" tabindex="-1" aria-disabled="true">
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
