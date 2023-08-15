import React from 'react'


const Productdetails=({ones})=>{
return(
    <div className="product-details">
          <div className="product-image">
            <img src={ones.imageUrl} alt={ones.name} />
          </div>
          <div className="product-info">
            <h1>{ones.name}</h1>
            <p>{ones.description}</p>
            <h2>Price : ${ones.price}</h2>
            <button>Add to Cart</button>
          </div>
        </div>
)
}










export default Productdetails 