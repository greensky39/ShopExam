/* eslint-disable */
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

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

function MainPage({ shoes }) {
  return (
    <>
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
              title={shoes[0].title}
              content={shoes[0].content}
              price={shoes[0].price}
            />

            <Colcp
              title={shoes[1].title}
              content={shoes[1].content}
              price={shoes[1].price}
            />

            <Colcp
              title={shoes[2].title}
              content={shoes[2].content}
              price={shoes[2].price}
            /> */}
          {shoes.map((a, i) => {
            return (
              <Colcp
                key={i}
                shoesnumber={i + 1}
                title={shoes[i].title}
                content={shoes[i].content}
                price={shoes[i].price}
              />
            );
          })}
          {shoes.map((a, i) => {
            return <Colcp2 key={i} shoes={shoes[i]} i={i} />;
          })}
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
  );
}
export default MainPage;
