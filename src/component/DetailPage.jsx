/* eslint-disable */
import React from "react";
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
  console.log("id :", id);

  const findShoes = props.shoesCopy
    .sort(function (a, b) {
      return a.price - b.price;
    })
    .find(function (item) {
      return item.id == id;
    });

  console.log(findShoes);

  const findShoes2 = props.shoes[id];
  console.log("findShoes2:", findShoes2);
  return (
    <>
      <div className="container">
        <Divbox>
          <H4sub className="red">제목</H4sub>
        </Divbox>
        <div className="my-alert-yellow">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
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
            <button className="btn btn-danger">주문하기</button>
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

export default DetailPage;
