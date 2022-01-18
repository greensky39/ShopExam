import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => {
    return { shoesStore: state.reducer, alertStore: state.reducer2 };
  });
  let dispatch = useDispatch();

  useEffect(() => {
    console.log();
  }, [state]);
  return (
    <div>
      <h3>장바구니</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>장바구니에 담기</th>
          </tr>
        </thead>
        <tbody>
          {state.shoesStore.map((a, index) => {
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.title}</td>
                <td>{a.quan}</td>
                <td>{a.price}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량증가", 데이터: a.id });
                    }}
                  >
                    {console.log("a.id :", a.id)}+
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "수량감소", 데이터: a.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {state.alertStore === true ? (
        <div className="my-alert-yellow">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={() => dispatch({ type: "false" })}>닫기</button>
        </div>
      ) : null}
      <Parent name="ady2" age="33"></Parent>
    </div>
  );
}
//구 문법
// function state를props화(state) {
//   console.log(state);
//   return {
//     shoesStore: state.reducer,
//     alertStore: state.reducer2,
//   };
// }

// export default connect(state를props화)(Cart);
function Parent(props) {
  return (
    <div>
      <Child1 name={props.name}></Child1>
      <Child2 age={props.age}></Child2>
    </div>
  );
}

// const Child1 = memo(() => {
//   useEffect(() => {
//     console.log("렌더링됨1");
//   });
//   return <div>1111</div>;
// });
// const Child2 = memo(() => {
//   useEffect(() => {
//     console.log("렌더링됨2");
//   });
//   return <div>2222</div>;
// });

const Child1 = () => {
  useEffect(() => {
    console.log("렌더링됨1");
  });
  return <div>1111</div>;
};
const Child2 = () => {
  useEffect(() => {
    console.log("렌더링됨2");
  });
  return <div>2222</div>;
};

export default Cart;
