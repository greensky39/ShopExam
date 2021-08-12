/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./DetailPage.scss";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

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

  let [presstab, setPressTab] = useState(0);
  let [aniswitch, setAniSwitch] = useState(false);

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
    console.log(e.target.value);
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
          <div>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <Nav className="mt-5" variant="tabs" defaultActiveKey="/link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                setPressTab(0);
                setAniSwitch(false);
              }}
            >
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                setPressTab(1);
                setAniSwitch(false);
              }}
            >
              Option 1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => {
                setPressTab(2);
                setAniSwitch(false);
              }}
            >
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={aniswitch} classNames="wow" timeout={1000}>
          <TabContent presstab={presstab} setAniSwitch={setAniSwitch} />
        </CSSTransition>
        {/* {presstab === 0 ? <div className="tab-div0">div0입니다.</div> : null}
        {presstab === 1 ? <div className="tab-div1">div1입니다.</div> : null}
        {presstab === 2 ? <div className="tab-div2">div2입니다.</div> : null} */}
      </div>
    </>
  );
}
function TabContent(props) {
  useEffect(() => {
    props.setAniSwitch(true);
  });
  if (props.presstab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.presstab === 1) {
    return <div>1번째 내용입니다.</div>;
  } else if (props.presstab === 2) {
    return <div>2번째 내용입니다.</div>;
  }
}

function Info(props) {
  return (
    <div>
      <p>재고 : {props.재고[0]}</p>
    </div>
  );
}
export default DetailPage;
