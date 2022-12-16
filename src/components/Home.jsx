import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { deleUser, accountState } from "../reducers/AccountsReducer";
import { minesOne, addOne, counterState } from "../reducers/CounterReducer";

export function Home() {
  const accounts = useSelector((state) => state.accounts);
  // const counter = useSelector(counterState);

  const dispatch = useDispatch();
  // const increment = {
  //   type: "ADD_ONE",
  // };

  // const decrement = {
  //   type: "MINES_ONE",
  // };

  return (
    <MDBContainer style={{ minHeight: "63vh" }}>
      <h3>Number of accounts : {accounts.length}</h3>
      <Form />
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">customer Name</th>
            <th scope="col">account Number</th>
            <th scope="col">account Type</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {accounts.map((ele) => {
            return (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.customerName}</td>
                <td>{ele.accountNumber}</td>
                <td>{ele.accountType}</td>
                <td>
                  <MDBBtn
                    color="danger"
                    onClick={() => {
                      dispatch(deleUser(ele.id));
                    }}
                  >
                    <MDBIcon fas icon="trash" />
                    delete
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}

export default Home;
