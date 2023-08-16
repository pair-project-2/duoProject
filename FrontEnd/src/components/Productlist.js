import React from "react";
import Productdetails from "./Productdetails";

const ProductsList = ({data,setOne,setView,delet,update,cartStal }) => {
    return (
        <div>
        <div className='products-list'>
            {data.map((e,i)=>{

             return(
            
            <div className="product-card" key={e._id}>
                <img src={e.imageUrl} alt={e.name} onClick={()=>{setView("productdetails")
            setOne(e)}} />
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <p className='card-item-price'>Price: ${e.price}</p>
                <p className='card-item-cat'>Categories: {e.category}</p>
                <div className="product-card-buttons">
                    <button >Update Product</button>
                    <button onClick={()=>{delet(e._id)}}>Delete Product</button>
                    <button onClick={()=>cartStal(e) } >Add to Cart</button>
                </div>
            </div>
             )
        })}
           
            </div>
        </div>
        
    )
}



export default ProductsList