/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./DetailPage.scss";

let Divbox = styled.div`
  padding: 20px;
`;
let H4sub = styled.h4`
  font-size: 25px;
  color: ${(props) => props.Colors};
`;

function DetailPage(props) {
  let history = useHistory();
  let { id } = useParams();

  const [alert, setAlert] = useState(true);

  function disAlert() {
    setAlert(false);
  }
  useEffect(() => {
    //2초 후에 alert 창 사라지게하기
    let alertTimer = setTimeout(() => {
      disAlert();
    }, 2000);
    return function () {
      clearTimeout(alertTimer);
    };
  }, [alert]);

  const findShoes = props.shoesCopy
    .sort(function (a, b) {
      return a.price - b.price;
    })
    .find(function (item) {
      return item.id == id;
    });

  const [inputdata, setInputData] = useState("");

  function GetInput(e) {
    setInputData(e.target.value);
    console.log(inputdata);
    // setInputData(inputdata);
  }

  return (
    <>
      <div className="container">
        {inputdata}
        <div>
          <input onChange={GetInput}></input>
        </div>
        <Divbox>
          <H4sub className="red">제목</H4sub>
        </Divbox>
        {alert === true ? (
          <div className="my-alert-yellow">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (Number(findShoes.id) + 1) +
                ".jpg"
              }
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{findShoes.title}</h4>
            <p> {findShoes.content} </p>
            <p>{findShoes.price}</p>
            <Info 재고={props.재고} />
            <button
              className="btn btn-danger"
              onClick={() => {
                let 재고복사 = [...props.재고];
                재고복사[0]--;
                props.재고변경(재고복사);
              }}
            >
              주문하기
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Info(props) {
  return (
    <div>
      <p>재고 : {props.재고[0]}</p>
    </div>
  );
}
export default DetailPage;
