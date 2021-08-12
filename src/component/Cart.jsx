import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <h3>장바구니</h3>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>종류</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quan}</td>
                <td>{a.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
function state를props화(state) {
  return {
    state: state,
  };
}

export default connect(state를props화)(Cart);
// export default Cart;
