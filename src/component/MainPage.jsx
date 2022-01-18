/* eslint-disable */
import React, { useContext, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import axios from "axios";
import { 재고context } from "../App";
import { useHistory } from "react-router-dom";

const jumbotron = css`
  padding-top: 60px;
  text-align: center;
  height: 400px;
  background-color: grey;
  align-items: center;

  button {
    margin-top: 40px;
  }
`;
const jumbobutton = css`
  background-color: black;
  color: white;
  border-radius: 5px;
  height: 40px;
  width: 100px;
`;

function MainPage({ shoes, setShoes }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <div css={jumbotron} className="jumbotron">
        <h1>20% Season Off</h1>
        <div>Until the day when the East Sea's waters and</div>
        <div>Mt. Baekdu are dry and worn away,</div>
        <div>God protect and preserve us.</div>
        <div>Long live our nation!</div>
        <div>
          <button css={jumbobutton}>more</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* {shoes.map((a, i) => {
            return (
              <Colcp
                key={i}
                shoesnumber={i + 1}
                title={shoes[i].title}
                content={shoes[i].content}
                price={shoes[i].price}
              />
            );
          })} */}
          {shoes.map((a, i) => {
            return <Colcp2 key={i} shoes={shoes[i]} i={i} />;
          })}
        </div>

        <button
          className="btn btn-primary"
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                console.log("성공");
                console.log(result.data);
                // 방법1
                let shoesCopy = [...shoes];
                shoesCopy.push(...result.data);
                setShoes(shoesCopy);
                // 방법2
                // setShoes([...shoes, ...result.data]);
              })
              .catch(() => {
                console.log("실패");
              });
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
}
function Colcp({ shoesnumber, title, content, price }) {
  const src = `https://codingapple1.github.io/shop/shoes${shoesnumber}.jpg`;
  return (
    <div className="col-md-4">
      <img src={src} width="100%" />
      <h4>{title}</h4>
      <p>
        {content} {price}
      </p>
    </div>
  );
}
function Colcp2(props) {
  let 재고 = useContext(재고context);
  // const src = `https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`;
  let history = useHistory();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("./detail/" + props.shoes.id);
        // history.push("./detail/" + props.i);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} {props.shoes.price}
      </p>
      {재고[props.i]}
    </div>
  );
}

function AxiosCol(props) {
  // "https://codingapple1.github.io/shop/data2.json"
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 3) + ".jpg"
        }
        width="100%"
      />
      <h4>상품명2 {props.moreshoes.title}</h4>
      <p>
        상품설명 {props.moreshoes.content} 가격 {props.moreshoes.price}
      </p>
    </div>
  );
}
export default MainPage;
