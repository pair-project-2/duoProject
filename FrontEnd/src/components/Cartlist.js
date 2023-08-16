
import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const CartList = (props) => {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setData(props.cartData);
  }, [trigger]);

  var sum = data.reduce((acc, e) => acc + e.price, 0);

  return (
    <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <MDBTypography tag="h4" variant="h4">
              <b>Shopping Cart</b>
            </MDBTypography>
            <MDBTypography tag="div" variant="p" className="text-right text-muted">
              {data.length} items
            </MDBTypography>
          </div>
          {data.map((e, i) => (
            <MDBRow className="border-top border-bottom" key={i}>
              <MDBCol size="2">
                <MDBCardImage src={e.imageUrl} alt={e.name} fluid />
              </MDBCol>
              <MDBCol>
                <MDBRow className="text-muted">{e.name}</MDBRow>
                <MDBRow>{e.description}</MDBRow>
              </MDBCol>
              <MDBCol>
                <MDBBtn tag="a" href="#">
                  -
                </MDBBtn>
                <MDBBtn tag="a" href="#" className="border">
                  1
                </MDBBtn>
                <MDBBtn tag="a" href="#">
                  +
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBTypography tag="div" variant="p">
                  &euro; {e.price}
                </MDBTypography>
                <MDBBtn onClick={() => {
                  props.remove(i);
                  setTrigger(!trigger);
                }}>
                  Remove
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          ))}
          <div className="back-to-shop">
            <a href="#">&leftarrow;</a>
            <span className="text-muted">Back to shop</span>
          </div>
        </MDBCardBody>
        <MDBCardBody className="summary">
          <div>
            <MDBTypography tag="h5" variant="h5">
              <b>Summary</b>
            </MDBTypography>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <MDBTypography tag="div" variant="p" style={{ paddingLeft: 0 }}>
              ITEMS {data.length}
            </MDBTypography>
            <MDBTypography tag="div" variant="p" className="text-right">
              &euro; {sum}
            </MDBTypography>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">Standard-Delivery- &euro;5.00</option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="d-flex justify-content-between"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <MDBTypography tag="div" variant="p">
              TOTAL PRICE
            </MDBTypography>
            <MDBTypography tag="div" variant="p" className="text-right">
              &euro; {sum}
            </MDBTypography>
          </div>
          <MDBBtn>Checkout</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default CartList;