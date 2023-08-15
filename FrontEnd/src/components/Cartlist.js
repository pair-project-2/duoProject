// import React, { useEffect, useState } from "react";

// const CartList = (props) => {
//   const [data, setData] = useState([]);
//   const [trigger,setTrigger] = useState(false)
// console.log(data,"data");

//   useEffect(() => {
//     setData(props.cartData);
//   }, [trigger]);

//   var sum = data.reduce((acc,e)=>acc+e.price,0)
  
//   return (
//     <div className="cart-list">
//       <h1>My cart</h1>
//       {data.map((e, i) => {
//         return (
//           <div className="cart-item">
//             <span>Product Name:{e.name} </span>
//             <span>Price:{e.price} </span>
//             <button className="cart-list-button" onClick={()=>{
//               props.remove(i)
//               setTrigger(!trigger)
//             }}>Remove</button>
//           </div>
//         );
//       })}

//       <h3>Total:{sum}$</h3>
//       <button onClick={()=>{
//         alert(`you paid ${sum} succesfully` )
//         props.empty()
//         setTrigger(!trigger)
//       }}>checkout</button>
//     </div>
//   );
// };

// export default CartList;





// import React, { useEffect, useState } from "react";
// import "./card.css";


// const CartList = (props) => {
//   const [data, setData] = useState([]);
//   const [trigger, setTrigger] = useState(false);

//   useEffect(() => {
//     setData(props.cartData);
//   }, [trigger]);

//   var sum = data.reduce((acc, e) => acc + e.price, 0);

//   return (
//     <div class="card">
//       <div class="row">
//         <div class="col-md-8 cart">
//           <div class="title">
//             <div class="row">
//               <div class="col">
//                 <h4>
//                   <b>Shopping Cart</b>
//                 </h4>
//               </div>
//               <div class="col align-self-center text-right text-muted">
//                 {data.length} items
//               </div>
//             </div>
//           </div>
//           {data.map((e, i) => {
//             return (
//               <div class="row border-top border-bottom" key={i}>
//                 <div class="row main align-items-center">
//                   <div class="col-2">
//                     <img class="img-fluid" src={e.imageUrl} alt={e.name} />
//                   </div>
//                   <div class="col">
//                     <div class="row text-muted">{e.name}</div>
//                     <div class="row">{e.description}</div>
//                   </div>
//                   <div class="col">
//                     <a href="#">-</a>
//                     <a href="#" class="border">
//                       1
//                     </a>
//                     <a href="#">+</a>
//                   </div>
//                   <div class="col">&euro; {e.price}</div>
//                   <button className="btn" onClick={()=>{
//                props.remove(i)
//                  setTrigger(!trigger)
//                  }}>Remove</button>
//                 </div>
//               </div>
//             );
//           })}
//           <div class="back-to-shop">
//             <a href="#">&leftarrow;</a>
//             <span class="text-muted">Back to shop</span>
//           </div>
//         </div>
//         <div class="col-md-4 summary">
//           <div>
//             <h5>
//               <b>Summary</b>
//             </h5>
//           </div>
//           <hr />
//           <div class="row">
//             <div class="col" style={{ paddingLeft: 0 }}>
//               ITEMS {data.length}
//             </div>
//             <div class="col text-right">&euro; {sum}</div>
//           </div>
//           <form>
//             <p>SHIPPING</p>
//             <select>
//               <option class="text-muted">Standard-Delivery- &euro;5.00</option>
//             </select>
//             <p>GIVE CODE</p>
//             <input id="code" placeholder="Enter your code" />
//           </form>
//           <div
//             class="row"
//             style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
//           >
//             <div class="col">TOTAL PRICE</div>
//             <div class="col text-right">&euro; {sum}</div>
//           </div>
//           <button class="btn">CHECKOUT</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartList;





// import "./card.css"
// import {
//     MDBBtn,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCol,
//     MDBContainer,
//     MDBIcon,
//     MDBInput,
//     MDBRow,
//     MDBTypography,
//     } from "mdb-react-ui-kit";
//     import React from "react";
    
//     export default function CartList() {
//     return (
//     <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol>
//             <MDBCard>
//               <MDBCardBody className="p-4">
//                 <MDBRow>
//                   <MDBCol lg="7">
//                     <MDBTypography tag="h5">
//                       <a href="#!" className="text-body">
//                         <MDBIcon fas icon="long-arrow-alt-left me-2" /> Continue
//                         shopping
//                       </a>
//                     </MDBTypography>
    
//                     <hr />
    
//                     <div className="d-flex justify-content-between align-items-center mb-4">
//                       <div>
//                         <p className="mb-1">Shopping cart</p>
//                         <p className="mb-0">You have 4 items in your cart</p>
//                       </div>
//                       <div>
//                         <p>
//                           <span className="text-muted">Sort by:</span>
//                           <a href="#!" className="text-body">
//                             price
//                             <MDBIcon fas icon="angle-down mt-1" />
//                           </a>
//                         </p>
//                       </div>
//                     </div>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Iphone 11 pro
//                               </MDBTypography>
//                               <p className="small mb-0">256GB, Navy Blue</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 2
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $900
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Samsung galaxy Note 10
//                               </MDBTypography>
//                               <p className="small mb-0">256GB, Navy Blue</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 2
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $900
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 Canon EOS M50
//                               </MDBTypography>
//                               <p className="small mb-0">Onyx Black</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 1
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $1199
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
    
//                     <MDBCard className="mb-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between">
//                           <div className="d-flex flex-row align-items-center">
//                             <div>
//                               <MDBCardImage
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
//                                 fluid className="rounded-3" style={{ width: "65px" }}
//                                 alt="Shopping item" />
//                             </div>
//                             <div className="ms-3">
//                               <MDBTypography tag="h5">
//                                 MacBook Pro
//                               </MDBTypography>
//                               <p className="small mb-0">1TB, Graphite</p>
//                             </div>
//                           </div>
//                           <div className="d-flex flex-row align-items-center">
//                             <div style={{ width: "50px" }}>
//                               <MDBTypography tag="h5" className="fw-normal mb-0">
//                                 1
//                               </MDBTypography>
//                             </div>
//                             <div style={{ width: "80px" }}>
//                               <MDBTypography tag="h5" className="mb-0">
//                                 $1799
//                               </MDBTypography>
//                             </div>
//                             <a href="#!" style={{ color: "#cecece" }}>
//                               <MDBIcon fas icon="trash-alt" />
//                             </a>
//                           </div>
//                         </div>
//                       </MDBCardBody>
//                     </MDBCard>
//                   </MDBCol>
    
//                   <MDBCol lg="5">
//                     <MDBCard className="bg-primary text-white rounded-3">
//                       <MDBCardBody>
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                           <MDBTypography tag="h5" className="mb-0">
//                             Card details
//                           </MDBTypography>
//                           <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
//                             fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
//                         </div>
    
//                         <p className="small">Card type</p>
//                         <a href="#!" type="submit" className="text-white">
//                           <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-white">
//                           <MDBIcon fab icon="cc-visa fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-white">
//                           <MDBIcon fab icon="cc-amex fa-2x me-2" />
//                         </a>
//                         <a href="#!" type="submit" className="text-white">
//                           <MDBIcon fab icon="cc-paypal fa-2x me-2" />
//                         </a>
    
//                         <form className="mt-4">
//                           <MDBInput className="mb-4" label="Cardholder's Name" type="text" size="lg"
//                             placeholder="Cardholder's Name" contrast />
    
//                           <MDBInput className="mb-4" label="Card Number" type="text" size="lg"
//                             minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />
    
//                           <MDBRow className="mb-4">
//                             <MDBCol md="6">
//                               <MDBInput className="mb-4" label="Expiration" type="text" size="lg"
//                                 minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
//                             </MDBCol>
//                             <MDBCol md="6">
//                               <MDBInput className="mb-4" label="Cvv" type="text" size="lg" minLength="3"
//                                 maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
//                             </MDBCol>
//                           </MDBRow>
//                         </form>
    
//                         <hr />
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Subtotal</p>
//                           <p className="mb-2">$4798.00</p>
//                         </div>
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Shipping</p>
//                           <p className="mb-2">$20.00</p>
//                         </div>
    
//                         <div className="d-flex justify-content-between">
//                           <p className="mb-2">Total(Incl. taxes)</p>
//                           <p className="mb-2">$4818.00</p>
//                         </div>
    
//                         <MDBBtn color="info" block size="lg">
//                           <div className="d-flex justify-content-between">
//                             <span>$4818.00</span>
//                             <span>
//                               Checkout{" "}
//                               <i className="fas fa-long-arrow-alt-right ms-2"></i>
//                             </span>
//                           </div>
//                         </MDBBtn>
//                       </MDBCardBody>
//                     </MDBCard>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//     );
//     }
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