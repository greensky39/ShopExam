/* eslint-disable */
import React from "react";
import { useHistory, useParams } from "react-router-dom";

function DetailPage(props) {
  let history = useHistory();
  let { id } = useParams();
  console.log("id :", id);
  console.log("shoes id :", props.shoes[id].id);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                "https://codingapple1.github.io/shop/shoes" +
                (Number(id) + 1) +
                ".jpg"
              }
              width="100%"
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[props.shoes[id].id].title}</h4>
            <p> {props.shoes[id].content} </p>
            <p>{props.shoes[id].price}</p>
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
