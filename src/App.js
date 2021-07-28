/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
// import { NavBar, Container, Nav, NavDropdown } from "react-bootstrap";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import data from "./data.js";
import { Col } from "react-bootstrap";

const jumbotron = css`
  height: 500px;
  background-color: grey;
  align-items: center;
`;
const jumbobutton = css`
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 40px;
  width: 100px;
`;
function App() {
  let [shoes, setShoes] = useState(data);
  console.log("shoes :", shoes[0].title);

  return (
    <>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              ShoeShop
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div css={jumbotron} className="jumbotron">
          <h1>20% Season Off</h1>
          <div>동해물과 백두산이 마르고 닳도록</div>
          <div>하느님이 보우하사 우리 나라 만세</div>
          <div>무궁화 삼천리 화려강산</div>
          <div>대한사람 대한으로 길이 보전하세</div>
          <div>
            <button css={jumbobutton}>more</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* <Colcp
              title={shoesCopy[0].title}
              content={shoesCopy[0].content}
              price={shoesCopy[0].price}
            />

            <Colcp
              title={shoesCopy[1].title}
              content={shoesCopy[1].content}
              price={shoesCopy[1].price}
            />

            <Colcp
              title={shoesCopy[2].title}
              content={shoesCopy[2].content}
              price={shoesCopy[2].price}
            /> */}
            {shoes.map((a, i) => {
              return (
                <>
                  <div>
                    <Colcp
                      key={i}
                      shoesnumber={i + 1}
                      title={shoes[i].title}
                      content={shoes[i].content}
                      price={shoes[i].price}
                    />
                  </div>
                </>
              );
            })}
            {shoes.map((a, i) => {
              return (
                <>
                  <div>
                    <Colcp2 key={i} shoes={shoes[i]} i={i} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
function Colcp({ shoesnumber, title, content, price }) {
  const src = `https://codingapple1.github.io/shop/shoes${shoesnumber}.jpg`;
  return (
    <div className="col-md-4">
      <img src={src} width="100%" />
      <h4>상품명 {title}</h4>
      <p>
        상품설명 {content}& 가격 {price}
      </p>
    </div>
  );
}
function Colcp2(props) {
  // const src = `https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`;
  return (
    <>
      <div className="col-md-4">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
        <h4>상품명2 {props.shoes.title}</h4>
        <p>
          상품설명 {props.shoes.content}& 가격 {props.shoes.price}
        </p>
      </div>
    </>
  );
}
export default App;
