import React from "react";
import { useState } from "react";
import axios from "axios";

function SelectPage() {
  const defChartType = [
    { value: "line", name: "라인 차트" },
    { value: "bar", name: "바 차트" },
    { value: "pie", name: "파이 차트" },
    { value: "line2", name: "라인 차트2" },
    { value: "bar2", name: "바 차트2" },
    { value: "pie2", name: "파이 차트2" },
  ];

  let [charttype, setChartType] = useState(defChartType[0]);

  function SelectChartType(e) {
    // setChartType(defChartType[e.target.options.selectedIndex - 1]);
    // console.log(defChartType[e.target.options.selectedIndex]);
    setChartType(defChartType[e.target.options.selectedIndex]);
    console.log(defChartType[e.target.options.selectedIndex]);
  }
  const scarr = [];

  const jsondata = [
    { id: 1, height: 150, width: 50 },
    { id: 2, height: 160, width: 57 },
    { id: 3, height: 170, width: 75 },
    { id: 4, height: 180, width: 85 },
    { id: 5, height: 120, width: 15 },
  ];
  const jarr = jsondata.map((a) => [a.id, a.width]);
  scarr.push(jarr);
  console.log("scarr :", scarr);

  const [inputs, setInputs] = useState({
    size: "",
    page: "",
  });

  let { size, page } = inputs;

  let [columns, setColumns] = useState("");

  const inputValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  function test() {
    console.log("size, page :", size, page);
  }
  return (
    <>
      <ChartTest
        defChartType={defChartType}
        SelectChartType={SelectChartType}
      />
      {/* <form type="submit"> */}
      <div>
        <b>data 설정</b>
        <div>
          <input
            name="size"
            placeholder="size"
            onChange={inputValue}
            value={size}
          ></input>
        </div>
        <div>
          <input
            name="page"
            placeholder="page"
            onChange={inputValue}
            value={page}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                test();
              }
            }}
          />
          <div>
            <button onClick={() => console.log("size, page :", size, page)}>
              테이블 만들기
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </>
  );
}

function ChartTest(props) {
  return (
    <>
      <div>
        <select onChange={props.SelectChartType}>
          {props.defChartType.map((a, i) => (
            <option>{a.name}</option>
          ))}
        </select>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          axios
            .get("http://localhost:8000/data?size=1000&page=1")
            .then((result) => {
              console.log("성공");
              console.log(result.data.result);
              let scarr1 = [];
              let jarr1 = result.data.result.map((a) => [
                a.row,
                a.country_region_code,
              ]);
              scarr1.push(jarr1);
              console.log("jarr1 :", jarr1);
            })
            .catch(() => {
              console.log("실패");
            });
        }}
      >
        data
      </button>
    </>
  );
}
export default SelectPage;
